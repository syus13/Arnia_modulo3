import * as yup from "yup"


class UserController{
    constructor(service){
        this.service = service
    }

   async create(req,res){
    const {body} = req
       
    const bodySchema = yup.object().shape({
        fullname: yup.string().min(9).required(),
        nickname: yup.string().min(3).required(),
        passward: yup.string().required(),
        email: yup.string().email().required()
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