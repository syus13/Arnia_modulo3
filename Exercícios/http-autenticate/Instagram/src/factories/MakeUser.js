import { UserController } from "../app/controllers/USerController.js"
import { UserRepository } from "../app/repositories/UserRepository.js"
import { UserService } from "../app/services/UserService.js"
import { User } from "../domain/User.js"
import { Photo } from "../domain/Photo.js"
import { PhotoRepository } from "../app/repositories/PhotoRepository.js"


class MakeUser{
    static getInstance(){
        repository = new UserRepository(User)
        photoRepository = new PhotoRepository(Photo)
        service = new UserService(repository, photoRepository)
        controller = new UserController(service)
        return controller
    }
}

export{MakeUser}