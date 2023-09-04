class PhotoRepository{
    constructor(model){
        this.model = model
    }

    async create(data){
        return hthis.model.create(data)
    }
}

export{PhotoRepository}