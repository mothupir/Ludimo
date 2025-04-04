import { Router } from "express";
import { getProductController } from "../controllers/product.controller";

const router = Router();

router.get("/get/:id", getProductController);

export default router;