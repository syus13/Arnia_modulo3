class AuthController{
    constructor(service){
        this.service = service
    }

    async login(req, res){
        const {body} = req
        const auth = await this.service.login(body)
        return res.json(auth)
    }
}

export {AuthController}