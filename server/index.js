import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import db from './db.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const JWT_SECRET = process.env.JWT_SECRET || 'replace-with-secure-secret';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173, http://localhost:3000';

const allowedOrigins = CLIENT_ORIGIN.split(',').map((origin) => origin.trim()).filter(Boolean);

app.set('trust proxy', 1);
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error('CORS policy: Origin not allowed'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

const contactSchema = Joi.object({
  fullName: Joi.string().trim().min(3).max(100).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().trim().min(5).max(120).required(),
  message: Joi.string().trim().min(10).max(1000).required(),
});

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().trim().min(3).max(100).optional(),
});

const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

app.get('/api/status', (_req, res) => {
  res.json({ status: 'ok', env: NODE_ENV, uptime: process.uptime() });
});

app.post('/api/contact', async (req, res) => {
  const { error, value } = contactSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: 'Invalid contact submission', details: error.details.map((d) => d.message) });
  }

  try {
    const contact = {
      id: crypto.randomUUID(),
      fullName: value.fullName,
      email: value.email,
      subject: value.subject,
      message: value.message,
      createdAt: new Date().toISOString(),
    };
    db.data.contacts.push(contact);
    await db.write();
    return res.status(201).json({ id: contact.id, message: 'Contact request received' });
  } catch (err) {
    console.error('Contact save error:', err);
    return res.status(500).json({ error: 'Unable to save contact request' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  const { error, value } = authSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: 'Invalid registration payload', details: error.details.map((d) => d.message) });
  }

  try {
    const existingUser = db.data.users.find((user) => user.email === value.email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const passwordHash = await bcrypt.hash(value.password, 12);
    db.data.users.push({
      id: crypto.randomUUID(),
      name: value.name || '',
      email: value.email,
      password_hash: passwordHash,
      created_at: new Date().toISOString(),
    });
    await db.write();
    return res.status(201).json({ message: 'Account created successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ error: 'Unable to create account' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { error, value } = authSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: 'Invalid login payload', details: error.details.map((d) => d.message) });
  }

  try {
    const user = db.data.users.find((entry) => entry.email === value.email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(value.password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '6h' });
    return res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Unable to sign in' });
  }
});

app.get('/api/auth/profile', authenticate, (req, res) => {
  const user = db.data.users.find((entry) => entry.id === req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  return res.json({ user });
});

if (NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../dist');
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath, { maxAge: '1d', immutable: true }));
    app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));
  }
}

app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => {
    process.stdout.write(`Server running in ${NODE_ENV} mode on port ${PORT}\n`);
  });
}

export default app;
