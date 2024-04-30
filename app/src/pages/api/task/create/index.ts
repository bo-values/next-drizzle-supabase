import { NextApiRequest, NextApiResponse } from 'next';
import db from "@/db"
import { todos } from "@/db/schema"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = await req.body
    const { label } = JSON.parse(body)
    
    const todo = await db.insert(todos).values({ label }).returning()
    return res.status(200).json(todo)
};