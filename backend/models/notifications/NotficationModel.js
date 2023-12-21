
import mongoose from "mongoose";
const NotficationSchema = mongoose.Schema({
    message:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    }
},{
timestamps:true
}
)

const Notification = mongoose.model('Notification',NotficationSchema);
export default Notification