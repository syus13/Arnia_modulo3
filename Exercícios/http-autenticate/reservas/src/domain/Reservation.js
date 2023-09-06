import mongoose, {Schema} from "mongoose";

const ReservationSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
    checkin: {type: Date, require: true},
    checkout: {typt: Date, require: true}
})

const Reservation = mongoose.model("Reservation", ReservationSchema)

export{Reservation}