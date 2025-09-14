import { connect } from 'mongoose';


const connectDB = async(url) => {
    try{
        await connect(url);
        console.log("connected to db successfully");
    }
    catch(err){
        console.error("error connecting to db", err);
    }
}

export default connectDB;