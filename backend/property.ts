// property.ts
import pool from './db.js';


interface Property {
  id?: number;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
}

class PropertyService {
  async getAllProperties(): Promise<Property[]> {
    const query = 'SELECT * FROM property';
    const { rows } = await pool.query(query);
    return rows;
  }

  async getPropertyById(id: number): Promise<Property | null> {
    const query = 'SELECT * FROM property WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0] || null;
  }

  async createProperty(property: Property): Promise<Property> {
    const { title, description, price, bedrooms, bathrooms, area, location } = property;
    const query = 'INSERT INTO property (title, description, price, bedrooms, bathrooms, area, location) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const { rows } = await pool.query(query, [title, description, price, bedrooms, bathrooms, area, location]);
    return rows[0];
  }

  async updateProperty(id: number, property: Property): Promise<Property | null> {
    const { title, description, price, bedrooms, bathrooms, area, location } = property;
    const query = 'UPDATE property SET title = $1, description = $2, price = $3, bedrooms = $4, bathrooms = $5, area = $6, location = $7 WHERE id = $8 RETURNING *';
    const { rows } = await pool.query(query, [title, description, price, bedrooms, bathrooms, area, location, id]);
    console.log("Rows are here:",rows);
    console.log("Rows are here:", rows);
    return rows[0] || null;
  }

  async deleteProperty(id: number): Promise<boolean> {
    const query = 'DELETE FROM property WHERE id = $1';
    await pool.query(query, [id]);
    return true;
  }
}

export default new PropertyService();
