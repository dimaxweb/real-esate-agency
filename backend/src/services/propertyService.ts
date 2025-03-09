import { Pool } from "pg";
// import dotenv from "dotenv";
import {pool}  from "../data-acess/db";

// dotenv.config();

class PropertyService {

  constructor(private dbPool: Pool) {}

  // public async createProperty(title: string, description: string, price: number, location: string): Promise<any> {
  //   try {
  //     const result = await this.dbPool.query(
  //       "INSERT INTO properties (title, description, price, location) VALUES ($1, $2, $3, $4) RETURNING *",
  //       [title, description, price, location]
  //     );
  //     return result.rows[0];
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
  //
  // public async getProperties(): Promise<any[]> {
  //   try {
  //     const result = await this.dbPool.query("SELECT * FROM properties");
  //     return result.rows;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
  //
  // public async getPropertyById(id: number): Promise<any> {
  //   try {
  //     const result = await this.dbPool.query("SELECT * FROM properties WHERE id = $1", [id]);
  //     if (result.rows.length === 0) {
  //       throw new Error("Property not found");
  //     }
  //     return result.rows[0];
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
  //
  // public async updateProperty(id: number, title: string, description: string, price: number, location: string): Promise<any> {
  //   try {
  //     const result = await this.dbPool.query(
  //       "UPDATE properties SET title = $1, description = $2, price = $3, location = $4 WHERE id = $5 RETURNING *",
  //       [title, description, price, location, id]
  //     );
  //     if (result.rows.length === 0) {
  //       throw new Error("Property not found");
  //     }
  //     return result.rows[0];
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
  //
  // public async deleteProperty(id: number): Promise<string> {
  //   try {
  //     const result = await this.dbPool.query("DELETE FROM properties WHERE id = $1 RETURNING *", [id]);
  //     if (result.rows.length === 0) {
  //       throw new Error("Property not found");
  //     }
  //     return "Property deleted successfully";
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
}



export { PropertyService };
