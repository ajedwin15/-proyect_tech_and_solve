import {Handler, Request, Response} from 'express'
//Model
import Product from '../models/product.model'


export const getfilterProduct:Handler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { filterProduct } = req.query
        const filterProductQuery = await Product.find({ $or:[{ title: filterProduct },{ category: filterProduct }]}, {__v: 0})
        res.json(filterProductQuery)
    } catch (error) {
        res.status(500).send(error)        
    }
}