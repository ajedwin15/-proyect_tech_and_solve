import {Handler, Request, Response} from 'express'
//Model
import Product from '../models/product.model'



export const putEditProduct:Handler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const editProduct = await Product.findByIdAndUpdate({_id : id}, req.body, {new: true})
        res.json(editProduct)
    } catch (error) {
        res.status(500).send(error)
    }
    
}

export const getEditListProduct:Handler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const editProduct = await Product.findById({_id : id},{__v: false }, req.body)
        res.json(editProduct)
    } catch (error) {
        res.status(500).send(error)
    }
}

