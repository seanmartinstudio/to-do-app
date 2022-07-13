import React from 'react'
import AddToDo from './AddToDo'
import ToDos from './ToDos'
import { useState, useEffect } from 'react'
import axios from 'axios'



const App = () => {

  const [toDoData, setToDoData] = useState([])

  const postToApi = (event, toDo, category ) => {
    axios.post('http://localhost:9292/categories-todos', {
      to_do_name: toDo,
      category_name: category,
      complete: false
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    fetch('http://localhost:9292/todos')
    .then((response) => response.json())
    .then((data) => setToDoData(data))
  }, [])

  return (
    <div>
        <AddToDo postToApi={postToApi}/>
        <ToDos toDoData={toDoData}/>
    </div>
  )
}

export default App


// Make Get Request for To Do's in App component
// Pass data from To Do's down to To Do's componenent
// Create