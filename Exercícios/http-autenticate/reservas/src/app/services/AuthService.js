import { CommonError } from "../../utils/CommonError.js"
import { Crypt } from "../../utils/Crypt.js"


class AuthService{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async login(data){
        const alreadExists = await this.userRepository.findByEmail(data.email)
        if(!alreadExists){
            return CommonError.build("Email ou senha incorretos", 404)
        }

        const passwordIsValid = Crypt.compare(data.password, alreadExists.password)
        if(!passwordIsValid){
            return CommonError.build("Email ou senha incorretos", 404)
        }

        const payload = {...alreadExists}
        const secretKey = process.env.JWT_SECRET_KEY
        const options = {expiresIn: '10m'}
        const token = JWT.sign(payload, secretKey, options)
        return {token, user: alreadExists}
    }
}

export{AuthService}