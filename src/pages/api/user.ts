import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const result = await prisma.user.findMany()
    res.json(result)
}