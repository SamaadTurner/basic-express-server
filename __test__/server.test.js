'use strict';

const app = require('../src/server').app
const supertest = require('supertest');
const sampleRequest = supertest(app);

describe('Server', () => {
  test('404 on bad route', async () => {
    const response = await sampleRequest.get('/foo');
    expect(response.status).toEqual(404);
  });
  
  test('404 on bad method', async () => {
    const response = await sampleRequest.post('/');
    expect(response.status).toEqual(404);
  });

  test('500 if no name in the query string', async () => {
    let response = await sampleRequest.get('/person');
    expect(response.status).toEqual(500);
    
    response = await sampleRequest.get('/person?name=');
    expect(response.status).toEqual(500);
  });

  test('200 if the name is in the query string', async () => {
    let response = await sampleRequest.get('/person?name=fred');
    expect(response.status).toEqual(200);
  });

  test('given an name in the query, the output object is correct', async () => {
    let response = await sampleRequest.get('/person?name=fred');
    expect(response.body).toEqual( { 'name': 'fred' } );
  });
  
});