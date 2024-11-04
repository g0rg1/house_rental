import HouseService from "../services/House.service.js";

class HouseController{
    async create(req,res){
        const house = await HouseService.create(req.body)
        try{
            res.status(201).json(house)
        }catch(e){
            console.error(e);
        }
    }
    async getAll(req,res){
        const houses = await HouseService.getAll();
        try{
            res.status(201).json(houses)
        }catch(e){
            console.error(e);
        }
    }
    async getOne(req,res){
        const {id} = req.params
        const house = await HouseService.getOne(id)
        try{
            res.status(201).json(house)
        }catch(e){
            console.error(e);
        }
    }
    async updateOne(req,res){
        const {id} = req.params
        const house = await HouseService.getOne(id)
        try{
            res.status(201).json(house)
        }catch(e){
            console.error(e);
        }
    }
    async deleteOne(req,res){
        const {id} = req.params
        const house = await HouseService.deleteOne(id)
        try{
            res.status(201).json(house)
        }catch(e){
            console.error(e);
        }
    }
}

export default new HouseController();