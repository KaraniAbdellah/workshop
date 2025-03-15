// Define The Structure of Data that will be store in DB
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    taskName: {
        required: true,
        type: String,
    }
});


const TaskModel = mongoose.model("tasks", TaskSchema);

export default TaskModel;
