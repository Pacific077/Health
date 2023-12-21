import mongoose from "mongoose";
const ConnectDb = async () => {
 const url = process.env.MONGO_URL
  try {
    const conn = await mongoose.connect(
        url
    );
    console.log(`Connected to database ${conn.connection.host}`);
  } catch (error) {
    console.log(`error in connecting to mongodb ${error.message}`);
    process.exit(1);
  }
};
export default ConnectDb;