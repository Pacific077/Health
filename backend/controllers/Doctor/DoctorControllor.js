import Doctor from "../../models/Doctor/DoctorModel.js"
import User from "../../models/User/UserModel.js";
import Notification from "../../models/notifications/NotficationModel.js";

//get all doctors
const getALlDoctors = async (req,res)=>{
    const doctorsList =  await Doctor.find({});
    res.status(200).json({
        message:"all doctor list",
        data:doctorsList
    })
}

//accept appointment
//to be corrected

const acceptAppointmentRequest = async (req,res)=>{
    const userId = req.params.id;
    const notification = await Notification.create({
        message:`Dr ${req.user.name} accepted your appointment on ${date} at ${time}`,
        notificationType: 'approval',
        senderId:user._id,
        reciverId:userId
      })
    const user =await User.findById(userId);
    await user.NewNotification.push(notification);
    await user.save();
    res.status(200).json({
        message:"appointment Accepted"
    })
}
export {getALlDoctors,acceptAppointmentRequest}