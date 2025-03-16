import { useEffect, useState } from "react";
import axios from "axios";

export default function To__Do_List() {
  const [tasks, setTasks] = useState([]);

  function AddTask() {
    let input = document.querySelector(".task_name");
    if (input.value) {
        const taskName = {
          taskName: input.value,
        };
        console.log(taskName);
        setTasks((tasks) => [...tasks, taskName]);
    
        // Add task To Database
        axios.post("http://127.0.0.1:3001/task/AddTask", taskName).then((res) => {
          console.log(res.data);
        });
    }
  }

  useEffect(() => {
    // Get All Task
    axios.get("http://127.0.0.1:3001/task/getTasks").then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, []);


  // Delete Task
  function handleDeleteTask(e) {
    const TaskId = e.target.parentElement.getAttribute("id");
    console.log(TaskId);
    e.target.parentElement.remove();
    axios.delete(`http://127.0.0.1:3001/task/deleteTask/${TaskId}`).then((res) => {
        console.log(res.data);
    });
  }

  return (
    <div>
      <div className="entry mb-3">
        <input
          className="task_name p-3 mr-2"
          type="text"
          placeholder="Enter task name"
        />
        <button
          onClick={() => AddTask()}
          className="bg-green-600 p-3 text-white"
        >
          Add Task
        </button>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => {
          return (
            <div
              key={index}
              id={task._id}
              className="task flex justify-between mb-2 items-center bg-zinc-950 p-2"
            >
              <p className="title text-white">{task.taskName}</p>
              <button
                onClick={(e) => handleDeleteTask(e)}
                className="delete bg-red-600 text-white p-2"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
