import JWT from "jsonwebtoken"

class AuthMiddleware{
    static handler(req, res, next){
        const {headers} = req

        if(!headers.authorization){
            return res.status(401).json({
                error: true,
                message: "Não autorizado"
            })
        }
        const[, token] = headers.authorization.split(" ")

        try{
            const secretKey = process.env.JWT_SECRET_KEY
            JWT.verify(token, secretKey)
        }
        catch(erro){
            return res.status(401).json({
                error: true,
                message: "Não autorizado"
            })
        }

        next()


    }
}

export {AuthMiddleware}