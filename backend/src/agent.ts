// agent.ts
import pool from './db';

interface Agent {
  id?: number;
  name: string;
  email: string;
  phone: string;
  bio: string;
}

class AgentService {
  async getAllAgents(): Promise<Agent[]> {
    const query = 'SELECT * FROM agent';
    const { rows } = await pool.query(query);
    return rows;
  }

  async getAgentById(id: number): Promise<Agent | null> {
    const query = 'SELECT * FROM agent WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0] || null;
  }

  async createAgent(agent: Agent): Promise<Agent> {
    const { name, email, phone, bio } = agent;
    const query = 'INSERT INTO agent (name, email, phone, bio) VALUES ($1, $2, $3, $4) RETURNING *';
    const { rows } = await pool.query(query, [name, email, phone, bio]);
    return rows[0];
  }

  async updateAgent(id: number, agent: Agent): Promise<Agent | null> {
    const { name, email, phone, bio } = agent;
    const query = 'UPDATE agent SET name = $1, email = $2, phone = $3, bio = $4 WHERE id = $5 RETURNING *';
    const { rows } = await pool.query(query, [name, email, phone, bio, id]);
    return rows[0] || null;
  }

  async deleteAgent(id: number): Promise<boolean> {
    const query = 'DELETE FROM agent WHERE id = $1';
    await pool.query(query, [id]);
    return true;
  }
}

export default new AgentService();
