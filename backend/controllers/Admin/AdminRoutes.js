import Appointment from "../../models/Appointments/Appointment.js";
import Doctor from "../../models/Doctor/DoctorModel.js";
import User from "../../models/User/UserModel.js";
import Notification from "../../models/notifications/NotficationModel.js";

const AccptDoctorReq = async (req, res) => {
  const { appointID } = req.body;
  const userId = req.params.id;
  //const 
   await Doctor.findOneAndUpdate(
    { userId: userId },
    { $set: { status: "approved" } }
  );
    
  const user = await User.findById(userId);
  const adminID = process.env.ADMIN_ID;
  // delete appointment from admin Array
  await User.updateOne(
    { _id: adminID },
    { $pull: { appointments: appointID } }
  );
  // Delete the appointment from model
  await Appointment.deleteOne({ _id: appointID });

  //createa notification for doctor
  const notification = await Notification.create({
    message: `Your request got approved for doctor `,
    notificationType: "approval",
    senderId: process.env.ADMIN_ID,
    reciverId: userId,
  });
  
  await user.NewNotification.push(notification);
   user.role = "Doctor";
  await user.save();
  res.status(200).json({
    message: "accepted doctors approval",
  });
};

const RejectDrRqst = async (req, res) => {
  try{
  //fetch appointment id from body
  const { appointID } = req.body;
  //admin id
  const ADMIN_ID = process.env.ADMIN_ID;

  // delete appointment from admin Array
  await User.updateOne(
    { _id: ADMIN_ID },
    { $pull: { appointments: appointID } }
  );

  // Delete the appointment from model
  await Appointment.deleteOne({ _id: appointID });
  //get doctor id from params
  const userId = req.params.id;
  //find the doctor
  const user = await User.findById(userId);
  //create rejection Notification
  const notification = await Notification.create({
    message: `your request got rejected for doctor by the Admin`,
    notificationType: "rejected",
    senderId: process.env.ADMIN_ID,
    reciverId: userId,
  });
  //push this notification in doctors array
  user.NewNotification.push(notification);
  //delte the user from doctors model
  await Doctor.deleteOne({ userId: userId });
  await user.save();

  //Deleting Appointment from admin array
  res.status(200).json({
    message: "rjected doctors approval",
  });
  }catch(Er){
    res.send(Er.message);
  }

};

export { AccptDoctorReq, RejectDrRqst };
