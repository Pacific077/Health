import Appointment from "../../models/Appointments/Appointment.js";
import Doctor from "../../models/Doctor/DoctorModel.js"
import User from "../../models/User/UserModel.js";
import Notification from "../../models/notifications/NotficationModel.js";

//get all doctors
const getALlDoctors = async (req,res)=>{
    const doctorsList =  await Doctor.find({});
    const accpetedDrlist = [];
    await doctorsList.map((doctor)=>{
        if(doctor.status==='approved'){
            accpetedDrlist.push(doctor)
        }
    })
    res.status(200).json({
        message:"all doctor list",
        data:accpetedDrlist
    })
}

//accept appointment
//to be corrected

const acceptAppointmentRequest = async (req,res)=>{
 try {
       //getting Patient's id 
       const userId = req.params.id;
       
       //creating acceptance notification
       const date =12;
       const time = 13;
       const notification = await Notification.create({
           message:`Dr ${req.user.name} accepted your appointment on ${date} at ${time}`,
           notificationType: 'approval',
           senderId:req.user._id,
           reciverId:userId
         })
       //finding the patient  
       const user =await User.findById(userId);
      
       //pushing the notification in Patient
       await user.NewNotification.push(notification);
   
       //saving the patient's data
       await user.save();
   
       //getting the appointment id
       const {appointID} = req.body
   
       await Appointment.findByIdAndUpdate(
           appointID,
           { status: 'approved' });
   
   
       //change appointment type to accepted
       res.status(200).json({
           message:"appointment Accepted"
       })
 } catch (error) {
    res.send(error.message)
 }
}


const RejectAppointmentRequest = async (req,res)=>{
    try {
          //getting Patient's id 
          const userId = req.params.id;
          
          //creating acceptance notification
          const date =12;
          const time = 13;
          const notification = await Notification.create({
              message:`Dr ${req.user.name} rejetced your appointment on ${date} at ${time}`,
              notificationType: 'rejected',
              senderId:req.user._id,
              reciverId:userId
            })
          //finding the patient  
          const user =await User.findById(userId);
         
          //pushing the notification in Patient
          await user.NewNotification.push(notification);
      
          //saving the patient's data
          await user.save();
      
          //getting the appointment id
          const {appointID} = req.body
      
          await Appointment.findByIdAndUpdate(
              appointID,
              { status: 'rejected' });
      
      
          //change appointment type to accepted
          res.status(200).json({
              message:"appointment rejected"
          })
    } catch (error) {
       res.send(error.message)
    }
   }

   const DoctorProfile = async (req, res) => {
    const {id} = req.body
    console.log("id",id);
    const user = await Doctor.findById(id);
    if (user) {
      res.status(200).json({
        message: "user profile success",
        data: user,
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  };   
export {getALlDoctors,acceptAppointmentRequest,RejectAppointmentRequest,DoctorProfile}