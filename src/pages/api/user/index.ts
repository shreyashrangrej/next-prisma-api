import prisma from '../../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const findAll = await prisma.user.findMany()
            res.status(200).json(findAll)
        } catch (err: any) {
            res.status(500).json({ error: err.message })
        }
    } else if (req.method === 'POST') {
        try {
            const createOne = await prisma.user.create({
                data: req.body
            })
            res.status(201).json(createOne)
        } catch (err: any) {
            res.status(500).json({ error: err.message })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
