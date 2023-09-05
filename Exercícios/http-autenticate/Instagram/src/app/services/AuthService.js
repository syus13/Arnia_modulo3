import JWT from "jsonwebtoken"
import { Crypt } from "../../utils/Crypt.js"
import { CommonError } from "../../utils/CommonError.js"

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async login(data) {
   
    const alreadyExists = await this.userRepository.findByEmail(data.email)
    if (!alreadyExists) {
      return CommonError.build("E-mail ou senha inválidos", 404)
    }

  
    const passwordIsValid = Crypt.compare(data.password, alreadyExists.password)
    if (!passwordIsValid) {
      return CommonError.build("E-mail ou senha inválidos", 404)
    }

    
    const payload = { ...alreadyExists }
    const secretKey = process.env.JWT_SECRET_KEY
    const options = { expiresIn: '10m' }

    const token = JWT.sign(payload, secretKey, options)

    return  { token, user: alreadyExists }
  }

}

export { AuthService }