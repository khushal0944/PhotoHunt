import mongoose from "mongoose";
import { collectionName, usersSchema } from "./users.schema";

export default async function dbConnect() {
    try {
        console.log("DB Connection Starts");
        const uri = process.env.MONGODB_URI
        if(!uri) {
            console.error("MongoDB URI NOT FOUND.")
            process.exit(1)
        }
        await mongoose.connect(uri, {
            connectTimeoutMS: 50000,
            socketTimeoutMS: 20000
        })
        mongoose.model(collectionName, usersSchema)
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR: ", error)
        throw error
    }
}