// Let's Make Routes
import express from "express";
import TaskModel from "../model/TaskModel.js";

const TaskRoute = express.Router();

TaskRoute.get("/getTasks", async (req, res) => {
    console.log("Request come to TaskRoute [GET]");
    try {
        const tasks = await TaskModel.find();
        console.log(tasks);
        res.status(200).send(tasks);
    } catch (error) {
        console.log("Can Not Get The Data: " + error);
        res.status(500).send({message: "Can Not Get The Data"});
    }
});

TaskRoute.delete("/deleteTask/:id", async (req, res) => {
    console.log("Request come to TaskRoute [Delete]");
    try {
        console.log(req.params.id);
        await TaskModel.findByIdAndDelete(req.params.id);
        res.status(200).send({message: "Delete Task Succefully"});
    } catch (error) {
        console.log("Can Not Delete The Data: " + error);
        res.status(500).send({message: "Can Not Delete The Data"});
    }
});

TaskRoute.post("/AddTask", async (req, res) => {
    console.log(req.body);
    try {
        const task = await TaskModel.create(req.body);
        console.log("Data Saved Successfully");
        res.send({message: "Data Saved Suceffully"});
    } catch (error) {
        console.log("Can Not Save The Data: " + error);
        res.send({message: "Data Does not Saved Suceffully"});
    }
});



export default TaskRoute;
