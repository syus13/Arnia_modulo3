import { Crypt } from "../../utils/Crypt.js"

class UserService{
    constructor(repository){
        this.repository = repository
    }

    async create(data){
        const userAlreadExists = await this.repository.findByEmail(data.email)
        if(userAlreadExists){
            return{
                error: true,
                message: "Usuário ja existe",
                status: 400
            }
        }

        const user = {
            ...data,
            password: Crypt.encrypt(data.password)
        }
        return this.repository.create(user)
    }
   

    async findAll(){
        const result = await this.repository.findAll()
        return result
    }

    
}

export{UserService}