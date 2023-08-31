import * as yup from "yup"


class UserController{
    constructor(service){
        this.service = service
    }

   async create(req,res){
    const {body} = req
       
    const bodySchema = yup.object().shape({
        name: yup.string().min(9).required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        // photo:
        
    })

    try{
        await bodySchema.validate(body)
    }
    catch(erro){
        return res.status(400).json({ 
            error: true, 
            message: erro.errors, 
            status: 400 })
    }

    const user = await this.service.create(body)
    if("error" in user){
        return res.status(user.status).json(user)

    }
    return res.status(201).json(user)

}
 async findAll(req, res){
    
const result = await this.service.findAll()
return res.status(200).json(result)


 }

}

export {UserController};