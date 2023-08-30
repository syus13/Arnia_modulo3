import mongoose,{connect} from 'mongoose'

class Database{
static async initialize(){
    try{
        mongoose.connection.once("open", () =>{
            console.log("Database on")
        })
        await connect(process.env.DATABASE_URL)
    }
    catch (error){
        console.log("Database connect error")
    }
    }
}
 export {Database}