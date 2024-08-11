import { Schema } from "mongoose"
import { v4 as uuid } from 'uuid'

export const collectionName = "users"

export interface UserType {
    name : string;
    email : string;
    password : string;
}

export const usersSchema = new Schema({
    id: {
        type: String,
        default: () => uuid(),
        immutable: true
    },
    name: {
        type: String,
        required: [true, "Name Is Required"],
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        index: true
    },
    email: {
        type: String,
        required: [true, "Name Is Required"],
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        match: [/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/, "Please enter a valid email"],
        index: true
    },
    password: {
        type: String,
        required: [true, "Password Is Required"],
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
        uppercase: true
    },
    deleted_at: {
        type: Date,
        default: null
    }
}, {
    timestamps: true,
    strict: "throw"
})