import express, { Request, Response } from "express";
import parcel from "./routes/parcel.route";
import product from "./routes/product.route";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});

app.use("/parcel", parcel);
app.use("/product", product);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});