import { Router } from "express";
import HouseController from "../controllers/House.controller.js";

const houseRouter = new Router()

houseRouter.post('/add' , HouseController.create);
houseRouter.get('/' , HouseController.getAll);
houseRouter.get('/:id' , HouseController.getOne);
houseRouter.put('/:id' , HouseController.updateOne);
houseRouter.delete('/:id' , HouseController.deleteOne);

export default houseRouter;