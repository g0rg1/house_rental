import UserService from "../services/User.service.js"

class UserController{
    async register(req,res){
        try{
        const userData = req.body;
        const createdUser = await UserService.register(userData)
        res.status(201).json(createdUser)
        }catch(e){
            console.error(e);
            res.status(500).json("User wasn't registered")
        }
    }
    async login(req,res){
        const {email , password} = req.body;

        try{
            const result = await UserService.login(email,password);
            res.json(result)
        }catch(e){
            res.status(400).json({message: e.message})
        }
    }
    async getAll(req,res){
        const users = await UserService.getAll();
        try{
            res.status(200).json(users)
        }catch(e){
            throw new Error(e)
        }
    }
    async delete(req , res){
        const {id} = req.params;
        const deletedUser = await UserService.delete(id)
        try{
            res.status(201).json(deletedUser)
        }catch(e){
            res.status(404).json("User not found")
        }
    }
}

export default new UserController()