import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

class UserService{

    async register(userData){
        const hashedPassword = await bcrypt.hash(userData.password , 7);

        const user = new User({
            ...userData,
            password:hashedPassword,
        });

        try{
            await user.save();
            return user;
        }catch(e){
            console.error(e);
            
        }
    }
    async login(email , password){
        const user = await User.findOne({email})
        if (!user){
            throw new Error('No user found')
        }
        const isMatch = await bcrypt.compare(password , user.password)
        if (!isMatch){
            throw new Error("Incorrect password")
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );
        return {
            token , 
            user: {
                id:user._id,
                email:user.email,
                fullname:user.fullname,
                role:user.role
            }
        }
    }
    async getAll(){
        const users = await User.find()
        return users;
    }
    async delete(id){
        const deletedUser = await User.findByIdAndDelete(id)
        return deletedUser
    }
}

export default new UserService();