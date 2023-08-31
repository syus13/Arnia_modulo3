import JWT from "jsonwebtoken"
import {compareSync} from "bcrypt"

class AuthService{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async login(data){
        const user = await this.userRepository.findByEmail(data.email)
        if(!user){
            return{
                error: true,
                status: 400,
                message: "E-mail não encontrado"
            }
        }
        const passwordIsValid = compareSync(data.password, user.password)
        if(!passwordIsValid){
            return{
                error: true,
                status: 400,
                message: "Senha incorreta"
            }
        }

        const payload = {email: user.email}
        const secretkey = process.env.JWT_SECRET_KEY
        const options = {expiresIn: '10min'}

        const token = JWT.sign(payload, secretkey, options)

        return {token, user}
    }
}

export{AuthService}