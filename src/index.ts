import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./swagger/swaggerDocs";
import cors from "cors";
import loggerRequest from "./middlewares/loggerRequest";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
}))
app.use(loggerRequest);
app.use("/users", userRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`app running at port :${port}`);
  console.log(`app documentation running at port :${port}/api-docs`);
});
