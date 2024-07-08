// tests/smoke.test.js
import request from 'supertest';
import { expect } from 'chai';
import {server as app} from '../../../dist/backend/server.js'; // Adjust the path to your Express app
describe('Smoke Tests', () => {
  it('should return 200 for the properties endpoint', async () => {
    const res = await request(app).get('/properties');
    expect(1).equal(1);
    expect(res.statusCode).equal(200);
  });
// Add more smoke tests as needed
});

