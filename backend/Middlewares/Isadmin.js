
import jwt from "jsonwebtoken"
import User from "../models/User/UserModel.js";
const IsAdmin = async (req,res,next)=>{
    if(req.cookies.token){
//verify the token
        const decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        const user =await User.findById(decoded.id).select("-password")
        const struser = await user._id.toString();
        console.log(process.env.ADMIN_ID)
        if(struser===process.env.ADMIN_ID){
            return next();
        }else{
            return res.status(401).json({
                message:"Inavlid Admin!! please login" 
            })
        }
    }else{
        return res.status(401).json({
            message:"Inavlid Admin!! please login" 
        })
    }
}

export default IsAdmin