import { migrate } from "drizzle-orm/postgres-js/migrator"
import drizzleConfig from "../../drizzle.config"
import db from "."

export const migrateDB = async () => {
  await migrate(db, { migrationsFolder: drizzleConfig.out })
}

migrateDB()