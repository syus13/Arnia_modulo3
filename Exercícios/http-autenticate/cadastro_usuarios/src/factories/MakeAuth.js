import { UserRepository } from "../app/repositories/UserRepository.js"
import { AuthService } from "../app/services/AuthService.js"
import {User} from "../domain/User.js"
import {AuthController} from "../app/controllers/AuthController.js"



class MakeAuth{
    static getInstance(){
        const userRepository = new UserRepository(User)
        const service = new AuthService(userRepository)
        const controller = new AuthController(service)
        return controller
    }
}

export {MakeAuth}