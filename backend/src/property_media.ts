// property_media.ts
import pool from './db';

interface PropertyMedia {
  id?: number;
  property_id: number;
  media_type: 'picture' | 'video';
  media_url: string;
}

class PropertyMediaService {
  async getPropertyMediaByPropertyId(propertyId: number): Promise<PropertyMedia[]> {
    const query = 'SELECT * FROM property_media WHERE property_id = $1';
    const { rows } = await pool.query(query, [propertyId]);
    return rows;
  }

  async addPropertyMedia(propertyMedia: PropertyMedia): Promise<PropertyMedia> {
    const { property_id, media_type, media_url } = propertyMedia;
    const query = 'INSERT INTO property_media (property_id, media_type, media_url) VALUES ($1, $2, $3) RETURNING *';
    const { rows } = await pool.query(query, [property_id, media_type, media_url]);
    return rows[0];
  }

  async deletePropertyMedia(id: number): Promise<boolean> {
    const query = 'DELETE FROM property_media WHERE id = $1';
    await pool.query(query, [id]);
    return true;
  }
}

export default new PropertyMediaService();    