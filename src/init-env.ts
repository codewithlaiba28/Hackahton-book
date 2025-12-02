import dotenv from 'dotenv';
import path from 'path';

// Load .env.local first (overrides .env)
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
// Load .env (fallback)
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

console.log("Checking DATABASE_URL...");
if (!process.env.DATABASE_URL) {
    console.error("❌ Error: DATABASE_URL is not defined in .env or .env.local");
} else {
    console.log("✅ DATABASE_URL found");
}
