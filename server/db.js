import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDirectory = path.join(__dirname, 'data');
const databaseFile = path.join(dataDirectory, 'app.json');

fs.mkdirSync(dataDirectory, { recursive: true });

const adapter = new JSONFile(databaseFile);
const db = new Low(adapter);
await db.read();
db.data ||= { contacts: [], users: [] };
await db.write();

export default db;