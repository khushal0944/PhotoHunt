export default function checkCredentials(name: string, email: string, password: string): boolean {
    if(!name || !email || !password) return false
    const checkEmail = email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g) 
    if(!checkEmail || checkEmail.length === 0) return false
    if(password.length < 8 || !password) return false
    return true
}