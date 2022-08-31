import './App.css';
import Header from './component/Header';
import Tasks from './component/Tasks';
import { useState } from 'react';
import AddTask from './component/AddTask';
function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'text1',
            day: 'day1',
            remainder: true,
        },
        {
            id: 2,
            text: 'text2',
            day: 'day2',
            remainder: true,
        },
        {
            id: 3,
            text: 'text3',
            day: 'day3',
            remainder: false,
        },
    ]);

    const addTask = (task) => {
        console.log(task);
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
            <Header />
            <AddTask onAdd={addTask} />
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
