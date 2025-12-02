import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

async function checkTables() {
    console.log("🔍 Checking for Auth Tables...");

    if (!process.env.DATABASE_URL) {
        console.error("❌ Error: DATABASE_URL is missing in .env");
        return;
    }

    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        connectionTimeoutMillis: 5000,
    });

    try {
        const client = await pool.connect();
        const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('user', 'session', 'account', 'verification');
    `);

        const foundTables = res.rows.map(row => row.table_name);
        console.log("Found tables:", foundTables);

        if (foundTables.includes('user') && foundTables.includes('session')) {
            console.log("✅ Auth tables exist!");
        } else {
            console.log("❌ Auth tables are MISSING.");
        }

        client.release();
    } catch (err: any) {
        console.error("❌ Check Failed:", err.message);
    } finally {
        await pool.end();
    }
}

checkTables();
