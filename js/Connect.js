import { MongoClient } from "mongodb";
import 'dotenv/config'


class Connect(){
    constructor(){
        this.URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.k9fuduo.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.CLUSTER}`
    }
}
