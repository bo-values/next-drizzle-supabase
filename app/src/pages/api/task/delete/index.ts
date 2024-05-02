// export const runtime = 'edge'
import { NextApiRequest, NextApiResponse } from 'next';
import db from "@/db"
import { todos } from "@/db/schema"
import { eq, and } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const authorization = req.headers['authorization'];
    if (!authorization) return
    const body = await req.body
    const { taskId } = JSON.parse(body)

    try {
        const todo = await db.delete(todos)
            .where(and(
                eq(todos.id, taskId),
                eq(todos.uid, authorization)
            ))
            .returning()
        return res.status(200).json(todo)
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
};