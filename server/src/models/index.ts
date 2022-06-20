import { Pool } from 'pg';
// import { vals } from '../config'


const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

export const query = (text?: any, params?: any[]) => pool.query(text, params)
