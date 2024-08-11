import { collectionName, UserType, usersSchema } from "@/database/users.schema";
import { validateUser } from "@/utils/validateUser";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


const uri = process.env.MONGODB_URI || "";
if(!uri) {
    console.error("Check URI in the .env file")
    process.exit(1)
}

export async function POST(request: Request) {
    try {
        const connection = await mongoose.connect(uri)
        if(!connection) throw new Error(`Connection Error`)
        const data: UserType = await request.json()
        const userData = validateUser(data);
        const model = mongoose.model(collectionName, usersSchema);
        const addedData = await model.insertMany(userData)
        if(addedData && addedData.length > 0) return NextResponse.json({message: "User Added Successfully", data: addedData}, {status: 201})
        else return NextResponse.json({message: "Error adding user data", data: []}, {status: 400})
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, {status: 500})
    }
}