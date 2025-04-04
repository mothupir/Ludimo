import { Request, Response, NextFunction } from "express";
import { getProductService } from "../services/product.service";

export const getProductController = (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Product Not Implemented", data: getProductService(req.params.id) });
}