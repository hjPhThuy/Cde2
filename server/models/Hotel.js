import mongoose from "monggoose";

const hontelSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: String, required: true},
    owner: {type: String, required: true, ref:"User"},
    city: {type: String, required: true, ref:"User"},
},{timestamps:true});


const Hotel = mongoose.model("Khách sạn", hontelSchema);

export default Hotel; 