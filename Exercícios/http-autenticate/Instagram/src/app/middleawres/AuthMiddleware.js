import JWT from "jsonwebtoken"
import { CommonError } from "../../utils/CommonError.js"

class AuthMiddleware{
    static handler(req, res, next){
        const {headers} = req

        if(!headers.authorization){
            return res.status(401).json(CommonError.build("Não autorizado", 401))
        }
        const[, token] = headers.authorization.split(" ")

        try{
            const secretKey = process.env.JWT_SECRET_KEY
            JWT.verify(token, secretKey)
        }
        catch(erro){
            return res.status(401).json(CommonError.build("Não autorizado", 401))
        }

        next()


    }
}

export {AuthMiddleware}