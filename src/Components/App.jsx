import React from 'react'
import AddToDo from './AddToDo'
import ToDos from './ToDos'
import { useState, useEffect } from 'react'
import axios from 'axios'



const App = () => {

  const [toDoData, setToDoData] = useState([])

  // POST, submits new To Dos and updates state
  const postToApi = (event, toDo, category ) => {
    axios.post('http://localhost:9292/categories-todos', {
      to_do_name: toDo,
      category_name: category,
      complete: false
    })
    .then(function (response) {
      setToDoData(toDoData.concat({
        name: response.data.name,
        category_id: response.data.category_id,
        complete: response.data.complete
      }))
    })}

    
  // GET, renders To Dos to UI when page mounts
  useEffect(() => {
    fetch('http://localhost:9292/todos')
    .then((response) => response.json())
    .then((data) => setToDoData(data))
  }, [toDoData])

  return (
    <div>
        <h1 className='text-2xl flex justify-center pt-4 '>To Do App</h1>
        <AddToDo postToApi={postToApi}/>
        <ToDos toDoData={toDoData} setToDoData={setToDoData}/>
    </div>
  )
}

export default App


//Path To Dos
//Delete To Dos