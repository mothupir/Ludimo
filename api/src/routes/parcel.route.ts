import { Router, Request, Response } from "express";
import { getParcelController } from "../controllers/parcel.controller";

const router = Router();

router.get("/get/:id", getParcelController);

export default router;