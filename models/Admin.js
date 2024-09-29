import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true
  },
  password: String
}, { collection: 'Admin' }); 

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;