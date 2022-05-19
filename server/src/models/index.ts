import { Pool } from 'pg';
import { vals } from '../config'


const pool = new Pool({
    host: vals.DB.PGHOST,
    user: vals.DB.PGUSER,
    database: 'dive_store',
    password: vals.DB.PGPASSWORD,
    port: 5432
});

export const query = (text?: any, params?: any[]) => pool.query(text, params)
