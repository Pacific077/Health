import mongoose from "mongoose";

const AppointmentSchema =  mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    DoctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Docotor'
    },
    status:{
        type:String,
        enum:['approved','pending','requested']
    }

},{
    timestamps:true
})

const Appointment = mongoose.model("Appointment",AppointmentSchema);

export default Appointment;