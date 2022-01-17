import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
    title: { 
        type: String,
        required: true    
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export default model('Product', ProductSchema)