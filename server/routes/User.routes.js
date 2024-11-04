import { Router } from "express";
import UserController from "../controllers/User.controller.js";
import { registerValidationRules, loginValidationRules, validate } from "../validators/uservalidate.js";

const userRouter = new Router();

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json("Access denied");
    }
    next();
};

userRouter.post('/register', registerValidationRules(), validate, UserController.register);
userRouter.post('/login', loginValidationRules(), validate, UserController.login);
userRouter.get('/admin', isAdmin, UserController.getAll);
userRouter.delete('/admin/:id', isAdmin, UserController.delete);

export default userRouter;