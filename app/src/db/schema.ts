import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm"

/**
 * テーブル: todos
 */
export const todos = pgTable("todos", {
    id: serial("id").primaryKey(),
    label: text("label").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
})

export type SelectTodo = InferSelectModel<typeof todos>
export type InsertTodo = InferInsertModel<typeof todos>