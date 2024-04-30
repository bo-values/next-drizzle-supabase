import { NextApiRequest, NextApiResponse } from 'next';
import db from "@/db"
import { todos } from "@/db/schema"
import { eq } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = await req.body
    const { taskId,label } = JSON.parse(body)

    try {
        const todo = await db.update(todos).set({label}).where(eq(todos.id,taskId)).returning()
        return res.status(200).json(todo)
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
};