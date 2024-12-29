import express, {Express} from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./swagger/swaggerDocs";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
}))
app.use("/users", userRoutes);
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
const port = process.env.PORT || 8080;
export default app;
