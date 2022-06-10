// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collections as data } from "../../data/collections"

export default function handler(req, res) {
	res.status(200).json(data)
}
