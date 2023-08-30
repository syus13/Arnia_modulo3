class PostService{
    controller(postRepository, userRepository){
        this.postRepository = postRepository
        this.userRepository = userRepository
    }

    async create(userId, data){
        const userExists = await this.userRepository.findById(userId)
        if(!userExists){
            return{
                error: true, sattus: 404, message: "Usuário não encontrado"
            }
        }

        const post = await this.postRepository.create(data)

        await this.userRepository.push(userId, post, id)
        return post
    }
}

export{PostService}