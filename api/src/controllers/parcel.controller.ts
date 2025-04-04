import { Request, Response, NextFunction } from "express";
import { getParcelService } from "../services/parcel.service";

export const getParcelController = (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Parcel Not Implemented", data: getParcelService(req.params.id) });
}