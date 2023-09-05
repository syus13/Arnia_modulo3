import {Crypt} from "bcrypt"

class UserService{
    constructor(repository, photoRepository){
        this.repository = repository
        this.photoRepository = photoRepository
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

    const photo = await this.photoRepository.create(data.photo)

    const user = {
        ...data,
        password: Crypt.encrypt(data.password), 
        photo: photo._id
    }
    return this.repository.create(user)
}

}

export{UserService}