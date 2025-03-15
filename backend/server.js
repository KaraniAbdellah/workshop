import express from "express";
import 'dotenv/config'
import cors from "cors";
// module has a lot function that allow me intercet with DB
import mongoose, { mongo } from "mongoose"; 
import TaskRoute from "./routes/TaskRoutes.js";



// Let's Make Rest API
const rest_api = express();
rest_api.use(cors());
rest_api.use(express.json());
rest_api.use("/task", TaskRoute);

// Let's Connect to Database
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connect Succefully to Database");
});


// Let's Make Rest Api Running in Port 3000
rest_api.listen((process.env.PORT), () => {
    console.log('Rest Api Running in Port ' + process.env.PORT);
});






