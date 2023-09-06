import { Crypt } from "../../utils/Crypt.js"


class UserService{
    constructor(repository){
        this.repository = repository
    }
async create(data){
    const alreadExists = await this.repository.findByEmail(data.email)
    if(alreadExists){
        return{
            error: true,
            message: "Usuário já existe",
            status: 400
        }
    }

    const user = {
        ...data,
        password: Crypt.encrypt(data.password)
    }
   
    return await this.repository.create(user)
}

async findAll(){
    const result = await this.repository.findAll()
    return result
}

}

export{UserService}