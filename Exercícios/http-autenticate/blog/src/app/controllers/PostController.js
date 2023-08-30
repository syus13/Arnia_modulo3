class PostController{
    constructor(service){ 
        this.service = service
    }

    async create(req, res){
        const {body, params: {id}} = req
        const post = await this.service.create(id, body)
        if("error" in post){
            res.status(201).json(post)
        }
    }
}

export{PostController}
