import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserData, storeRencentSearchedCities } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get('/', protect, getUserData);
userRouter.post('/store-recent-search', protect, storeRencentSearchedCities);


export default userRouter;