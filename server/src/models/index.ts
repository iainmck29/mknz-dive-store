import { Pool } from 'pg';
const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
const production = process.env.PRODUCTION


const pool = new Pool({
    connectionString: production ? process.env.DATABASE_URL : connectionString,
    ssl: {  
    rejectUnauthorized: false,
  },
});

export const query = (text?: any, params?: any[]) => pool.query(text, params)
