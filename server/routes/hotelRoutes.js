import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { regiterHotal } from "../controllers/hotelController.js";

const hotelRouter = express.Router();

hotelRouter.get('/', protect, regiterHotal);

export default hotelRouter;