import Doctor from "../../models/Doctor/DoctorModel.js"
import User from "../../models/User/UserModel.js";
import Notification from "../../models/notifications/NotficationModel.js";

const AccptDoctorReq = async (req,res)=>{
    const userId = req.params.id;
    const user = await User.findById(userId);
    const notification = await Notification.create({
        message:`Your request got approved for doctor `,
        notificationType: 'approval',
        senderId:process.env.ADMIN_ID,
        reciverId:userId
      })
    user.NewNotification.push(notification);
    user.role='Doctor';
    user.save();
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
    user.NewNotification.push(notification);
    await Doctor.deleteOne({userId:userId});
    user.save();
    res.status(200).json({
        message:"rjected doctors approval"
    })
}

export {AccptDoctorReq,RejectDrRqst}
