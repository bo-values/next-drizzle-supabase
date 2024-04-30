import { NextApiRequest, NextApiResponse } from 'next';
import db from "@/db"
import { SelectTodo, todos } from "@/db/schema"
import { asc, desc } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const selectTodos: SelectTodo[] = await db.select().from(todos).orderBy(desc(todos.id))
        if (selectTodos.length < 1) return []
    
        return res.status(200).json(selectTodos)
      } catch (error: any) {
        console.log(error)
        throw new Error(error)
      }
};