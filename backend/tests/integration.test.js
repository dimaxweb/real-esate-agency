// tests/integration.test.js

import request from 'supertest';
import { expect } from 'chai';
import {server as app} from '../dist/server.js'; // Adjust the path to your Express app

describe('Integration Tests', () => {
  // beforeAll(async () => {
  //   // Initialize database, seed data, etc.
  // });

  // afterAll(async () => {
    
  // });

  const testGlobal = {
    propertyId: 0
  }

  it('should create a new property', async () => {
    const newProperty = {
      title: 'Test Property',
      description: 'Test Description',
      price: 100000,
      bedrooms: 2,
      bathrooms: 1,
      area: 1000,
      location: 'Test Location',
      listing_type: 'For Sale'
    };
    const res = await request(app).post('/properties').send(newProperty);
    expect(res.statusCode).equal(200);
    expect(res.body).to.have.property('id');
    testGlobal.propertyId = res.body.id;
    console.log('testGlobal.propertyId', testGlobal.propertyId);
  });

  it('should retrieve a list of properties', async () => {
    const res = await request(app).get('/properties');
    expect(res.statusCode).equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should update an existing property', async () => {
    const updatedProperty = {
      title: 'Updated Test Property',
      description: 'Updated Description',
      price: 120000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      location: 'Updated Location',
      listing_type: 'For Rent'
    };
    const propertyId = testGlobal.propertyId; // Adjust this ID as needed
    const res = await request(app).put(`/properties/${propertyId}`).send(updatedProperty);
    expect(res.statusCode).equal(200);
    expect(res.body.title).equal(updatedProperty.title);
  });

  it('should delete a property', async () => {
    const propertyId = testGlobal.propertyId; // Adjust this ID as needed
    const res = await request(app).delete(`/properties/${propertyId}`);
    expect(res.statusCode).equal(200);
  });

  // Add more integration tests as needed
});
