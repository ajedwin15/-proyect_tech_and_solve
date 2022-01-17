import mongoose , { ConnectOptions } from 'mongoose'

export default async function connect(){
    const MONGO_HOST_URI= process.env.MONGO_HOST
    const MONGO_PORT_URI = process.env.MONGO_PORT
    const MONGO_DB_URI = process.env.MONGO_DB

    const mongoUri: string = `mongodb://${MONGO_HOST_URI}:${MONGO_PORT_URI}/${MONGO_DB_URI}`
   try {
       await mongoose.connect(mongoUri, {
           useNewUrlParser: true,
        } as ConnectOptions )
        console.log('connected to mongodb')
   } catch (error) {
       console.log(error, 'I am not connected to mongodb');
   }
}