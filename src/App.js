import './App.css';
import Header from './component/Header';
import Tasks from './component/Tasks';
import { useState } from 'react';
import AddTask from './component/AddTask';
function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        // console.log(task);
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        console.log(id);
        setTasks(tasks.filter((task) => task.id !== id));
    };
    const toggleRemainder = (id) => {
        console.log(id);
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, remainder: !task.remainder } : task
            )
        );
    };
    return (
        <div className="container">
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleRemainder}
                />
            ) : (
                'No task to show'
            )}
        </div>
    );
}

export default App;
