import Doctor from "../../models/Doctor/DoctorModel.js"

const getALlDoctors = async (req,res)=>{
    const doctorsList =  await Doctor.find({});
    res.status(200).json({
        message:"all doctor list",
        data:doctorsList
    })
}
export {getALlDoctors}