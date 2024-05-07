import { drizzle } from "drizzle-orm/postgres-js";
// import {postgresConnectionString} from "@vercel/postgres";
// import postgres from "@vercel/postgres";
import postgres from "postgres";
import * as schema from "./schema";
// const clinet = new Client({
//     connectionString:process.env.SUPABASE_DB_URI
// })
// postgresConnectionString("direct")
const client = postgres(process.env.SUPABASE_DB_URI || '');
// const client = sql(process.env.SUPABASE_DB_URI || '');
const db = drizzle(client, { schema });

export default db;