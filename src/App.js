import React from 'react'
import './App.css';
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from 'react'
import AddTask from "./components/AddTask"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  function toggleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // Add Task
  function addTask(task) {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Learn React",
        "day": "Feb 7th at 2:34pm",
        "reminder": false
      }
    ]
  )


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ("No Tasks")}
    </div>
  )
}



export default App;
