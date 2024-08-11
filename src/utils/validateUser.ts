import { UserType } from "@/database/users.schema"

export function validateUser (user: UserType) {
    if(!user.name || user.name === "" || user.name.length <= 3 || typeof user.name !== "string") {
        return new Error(`Name ${user.name} is Invalid.`)
    }
    if(!user.email || user.email === "" || user.email.length <= 3 || typeof user.email !== "string") {
        return new Error(`Email ${user.email} is Invalid.`)
    }
    if(!user.password || user.password === "" || user.password.length <= 8 || typeof user.password !== "string") {
        return new Error(`Password ${user.password} is Invalid.`)
    }
    return user
}