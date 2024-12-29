import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes"
import bodyParser from "body-parser";

dotenv.config();

const app= express();
app.use(bodyParser.json());
app.use("/users",userRoutes);
const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`app running at port :${port}`);
    console.log(`app documentation running at port :${port}/api-docs`);
})