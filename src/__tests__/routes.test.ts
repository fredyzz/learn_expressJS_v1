import app from '../server';
import supertest from 'supertest';

describe('GET /test', () => {
    it('should return a "Test message!" message', async () => {
        const response = await supertest(app).get('/test');
        expect(response.body.message).toBe('Test message!');
    });
});