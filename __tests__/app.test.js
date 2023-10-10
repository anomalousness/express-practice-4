const request = require('supertest');
const app = require('../app');

describe('non-existent route', () => {
  test('returns 404 and error when route does not exist', async () => {
    const response = await request(app).get('/missing');
    expect(response.status).toBe(404);
    expect(response.status).not.toBe(200 || 201 || 500);
    expect(response.res.statusMessage).toBe("Not Found");
    expect(response.res.req.path).toBe("/missing");
  });
});

describe('GET /', () => {
  test('returns 200 and valid msg when using GET / endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.status).not.toBe(404 || 201 || 500);
    expect(response.body.message).toBe("The GET route");
    expect(response.res.req.path).toBe("/");
  });
});

describe('POST /', () => {
  test('returns 201 and valid msg when using POST / endpoint', async () => {
    const response = await request(app).post('/');
    expect(response.status).toBe(201);
    expect(response.status).not.toBe(404 || 200 || 500);
    expect(response.body.message).toBe("The POST route");
    expect(response.res.req.path).toBe("/");
  });
});