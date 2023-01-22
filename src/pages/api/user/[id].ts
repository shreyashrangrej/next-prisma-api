import prisma from '../../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const findOne = await prisma.user.findUnique({
                where: {
                    id: req.query.id?.toString()
                }
            })
            res.status(200).json(findOne)
        } catch(err: any) {
            res.status(500).json({ error: err.message })
        }
    } else if (req.method === 'PUT') {
        try {
            const updateOne = await prisma.user.update({
                where : {
                    id: req.query.id?.toString()
                },
                data: req.body
            })
            res.status(200).json(updateOne)
        } catch(err: any) {
            res.status(500).json({ error: err.message })
        }
    } else if (req.method === 'DELETE') {
        try {
            const deleteOne = await prisma.user.delete({
                where: {
                    id: req.query.id?.toString()
                }
            })
            res.status(200).json(deleteOne)
        } catch(err: any) {
            res.status(500).json({ error: err.message })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}