import initDatabase from "./initDatabase";
import app from '../src/app';
import request from 'supertest';
import { validUserCredentials, invalidUserCredentials } from './testData';

describe('Auth API', () => {
  beforeEach(async () => {
    await initDatabase();
  })

  it('invalid log in', async () => {
    invalidUserCredentials.forEach(async credentials => {
      const res = await request(app).post('/auth/logIn').send({
        email: credentials.email, 
        password: credentials.password
      });
      expect(res.status).toBe(401);
    });
  });

  it('valid log in', async () => {
    validUserCredentials.forEach(async credentials => {
      const res = await request(app).post('/auth/logIn').send({
        email: credentials.email, 
        password: credentials.password
      });
      expect(res.status).toBe(200);
    });
  });
});