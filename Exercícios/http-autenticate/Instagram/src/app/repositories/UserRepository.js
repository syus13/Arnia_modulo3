class UserRepository{
    constructor(model){
        this.mddel = model
    }

    async create(data){
        return this.model.create(data)
    }


}

export{UserRepository}