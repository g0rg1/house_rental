import House from "../models/House.js"

class HouseService{
    async create(house){
        const createdHouse = await House.create(house)
        return createdHouse
    }
    async getAll(){
        const houses = await House.find()
        return houses
    }
    async getOne(id){
        const house = await House.findById(id)
        return house;
    }
    async updateOne(id){
        const updatedHouse = await House.findByIdAndUpdate(id)
        return updatedHouse
    }
    async deleteOne(id){
        const deletedHouse = await House.findByIdAndDelete(id)
        return deletedHouse
    }
}

export default new HouseService()