import { drizzle } from "drizzle-orm/vercel-postgres";
import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(process.env.SUPABASE_DB_URI || '');
const db = drizzle(client, { schema });

export default db;