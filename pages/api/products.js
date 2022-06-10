// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid'
import { products as data} from '../../data/products'

export default function handler(req, res) {
	res.status(200).json(data)
}
