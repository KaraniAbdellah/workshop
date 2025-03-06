import { useState } from "react";



export default function To__Do_List() {
    const [tasks, setTasks] = useState([]);
    function AddTask() {
        let input = document.querySelector(".task_name");
        const task_name = {
            task_name: input.value,
        }
        console.log(task_name);
        setTasks((tasks) => [...tasks, task_name]);
    }
    return (
        <div >
            <div className="entry mb-3">
                <input className="task_name p-3 mr-2" type="text" placeholder="Enter task name"/>
                <button onClick={() => AddTask()} className="bg-green-600 p-3 text-white">Add Task</button>
            </div>
            <div className="tasks">
                {
                    tasks.map((task) => {
                       return (
                        <div className="task flex justify-between mb-2 items-center bg-zinc-950 p-2">
                            <p className="title text-white">{task.task_name}</p>
                            <button className="delete bg-red-600 text-white p-2">Delete</button>
                        </div>
                       );
                    })
                }
            </div>
        </div>
    );
}



