import Doctor from "../../models/Doctor/DoctorModel.js"
import User from "../../models/User/UserModel.js";
import Notification from "../../models/notifications/NotficationModel.js";

const AccptDoctorReq = async (req,res)=>{
    console.log("statrt")
    const {name,email,password,Speciality,Fees}= req.body
    const userId = req.params.id;
    const user = await User.findById(userId);
    const notification = await Notification.create({
        message:`Your request got approved for doctor `,
        notificationType: 'approval',
        userId
      })
    user.newNotifiaction.push(notification);
    user.role='Doctor';
    user.save();
    await Doctor.create({
        name,
        email,
        password,
        Speciality,
        Fees,
    })
    res.status(200).json({
        message:"accepted doctors approval"
    })
}
const RejectDrRqst = async (req,res)=>{
    const userId = req.params.id;
    const user = await User.findById(userId);
    const notification = await Notification.create({
        message:`your request got rejected for doctor `,
        notificationType: 'rejected',
        userId
      })
    user.newNotifiaction.push(notification);
    user.save();
    res.status(200).json({
        message:"rjected doctors approval"
    })
}

export {AccptDoctorReq,RejectDrRqst}
