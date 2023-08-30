import { UserRepository } from "../app/repositories/UserRepository.js"
import { User } from "../domain/User.js"
import { PostRepository } from "../app/repositories/PostRepository.js"
import {Post} from "../domain/Post.js"
import {PostService} from "../app/services/PostService.js"
import {PostController} from "../app/controllers/PostController.js"

class MakePost{
    static getInstance(){
        const repository = new PostRepository(Post)
        const userRepository = new UserRepository(User)
        const service = new PostService(repository, userRepository)
        const controller = new PostController(service)

    return controller


    }
}

export {MakePost}