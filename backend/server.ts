// server.ts
import express from 'express';
import bodyParser from 'body-parser';
import propertyService from './property.js';
// import agentService from './agent';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Property routes
app.get('/properties', async (req, res) => {
  const properties = await propertyService.getAllProperties();
  res.json(properties);
});

app.get('/properties/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const property = await propertyService.getPropertyById(id);
  if (property) {
    res.json(property);
  } else {
    res.status(404).json({ error: 'Property not found' });
  }
});

app.post('/properties', async (req, res) => {
  const property = await propertyService.createProperty(req.body);
  res.json(property);
});

app.put('/properties/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedProperty = await propertyService.updateProperty(id, req.body);
  if (updatedProperty) {
    res.json(updatedProperty);
  } else {
    res.status(404).json({ error: 'Property not found' });
  }
});

app.delete('/properties/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await propertyService.deleteProperty(id);
  res.json({ message: 'Property deleted successfully' });
});

// Agent routes
// Similar to property routes, you can define routes for agents

export const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



export default app;