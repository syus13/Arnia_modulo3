import mongoose, {Schema} from "mongoose";

const HotelSchema = new Schema({
    name: { type: String, require: true},
    address: {type: String, require: true},
    roonsAvailable: {type: Number, require: true}
})

const Hotel = mongoose.model("Hotel", HotelSchema)

export{Hotel}