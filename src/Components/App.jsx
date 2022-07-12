import React from 'react'
import AddToDo from './AddToDo'
import ToDos from './ToDos'
import { useState, useEffect } from 'react'



const App = () => {

  const [toDoData, setToDoData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/todos')
    .then((response) => response.json())
    .then((data) => setToDoData(data))
  }, [])

  return (
    <div>
        <AddToDo/>
        <ToDos toDoData={toDoData}/>
    </div>
  )
}

export default App


// Make Get Request for To Do's in App component
// Pass data from To Do's down to To Do's componenent
// Create