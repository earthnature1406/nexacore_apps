import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../server/index.js';

describe('Backend API', () => {
  it('returns status ok', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  it('rejects invalid contact payload', async () => {
    const response = await request(app)
      .post('/api/contact')
      .send({ fullName: 'A', email: 'bad', subject: '', message: 'short' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid contact submission');
  });
});
