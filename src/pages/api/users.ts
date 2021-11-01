import { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'

const handleUsers = (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = join(__dirname, '../../../../DB/users.json')
  const file = JSON.parse(readFileSync(filePath, 'utf-8'))

  res.status(200).json(file)
}

export default handleUsers
