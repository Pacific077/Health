import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin','Patient','Doctor']
    },
    newNotifiaction:[
        {
           type:mongoose.Schema.Types.ObjectId,
            ref:'Notification'
        }
    ],
    seenNotification:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Notification'
        }
    ]
},
{
    timestamps:true,
})
const User = mongoose.model('user',UserSchema)

export default User;
i