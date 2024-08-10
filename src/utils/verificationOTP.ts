export default function verificationOTP () {
    const numbers = "0123456789";
    let otp: string = "";
    for(let i=1;i<=6;i++){
        const randomNo = Math.floor((Math.random())*10);
        otp += numbers[randomNo]
    }
    return otp
}