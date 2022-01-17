import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

//Swagger
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import {options} from './swaggaerOptions'
 
import product from './router/product.routes'

//initializations
const app = express()

//Settings
app.set('port', process.env.PORT || 4000 )
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const specs = swaggerJsDoc(options)

app.use(product)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app