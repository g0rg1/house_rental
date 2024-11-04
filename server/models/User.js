import mongoose from "mongoose";


const roles = {
    ADMIN : 'admin',
    LANDLORD : 'landlord',
    TENANT : 'tenant',
    GUEST: 'guest',
};


const UserSchema = new mongoose.Schema({
    fullname : {
        type:String , 
        required:true
    },
    email: {
        type:String , 
        required:true,
        unique:true,
    },
    password:{
        type:String ,
        required:true
    },
    role:{
        type:String ,
        enum: Object.values(roles) ,
        default:roles.GUEST 
    },
    houses : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref :"House"
        }
            ]
})

const User = mongoose.model('User' , UserSchema)

export default User;
export {roles}