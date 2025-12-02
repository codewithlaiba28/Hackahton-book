import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

async function testConnection() {
    console.log("🔌 Testing Database Connection...");
    console.log(`Target: ${process.env.DATABASE_URL?.split('@')[1] || 'Unknown'}`);

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
        console.log("✅ Connection Successful!");
        const res = await client.query('SELECT NOW()');
        console.log("🕒 Server Time:", res.rows[0].now);
        client.release();
    } catch (err: any) {
        console.error("❌ Connection Failed:");
        console.error(err.message);
        if (err.code === 'ENOTFOUND') {
            console.error("👉 Hint: The hostname is wrong. Check your Supabase Connection String.");
        } else if (err.code === '28P01') {
            console.error("👉 Hint: Wrong password.");
        }
    } finally {
        await pool.end();
    }
}

testConnection();
