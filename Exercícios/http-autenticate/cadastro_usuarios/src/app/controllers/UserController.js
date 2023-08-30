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
        return res.status(400).json(erro.errors)
    }

}
}

export {UserController}