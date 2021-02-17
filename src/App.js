import React from 'react'
import './App.css';
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from 'react'


const App = () => {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
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
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />)
        : ("No Tasks")}
    </div>
  )
}



export default App;
