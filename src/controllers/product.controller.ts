import {Handler, Request, Response} from 'express'
//Model
import Product from '../models/product.model'

export const createProduct:Handler = async (req: Request, res: Response): Promise<void> => {
    try {
        const {title, description, price, category} = req.body
        const newProduct = new Product({ title, description, price, category })
        await newProduct.save()
        res.json(newProduct)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getListProduct:Handler = async (req: Request, res: Response): Promise<void> => {
    try {
        const newListProduc = await Product.find({}, { __v: false })
        res.json(newListProduc)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deteleProduct:Handler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        await Product.findByIdAndDelete(id)
        res.json({"message": "Producto eliminado"})
    } catch (error) { 
        res.status(500).send(error)
    }
}