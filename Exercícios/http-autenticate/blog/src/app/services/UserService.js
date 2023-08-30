import {hashSync} from "bcrypt"

class UserService{
    constructor(repository){
        this.repository = repository
    }

    async create(data){
        const user = {
            ...data,
        password: hashSync(data.password, 6)
    }
    const result = await this.repository.create(user)
    return result    
    }

    async index(){
        const result = await this.repository.findAll()
        return result
    }

    
}

export{UserService}