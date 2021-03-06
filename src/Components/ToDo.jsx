import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

const ToDo = ( {name, id, category_id, complete, toDoData, setToDoData} ) => {

    //State for Complete UI
    const[taskComplete, setTaskComplete] = useState(complete)

    //Deletes 'To Do' from UI
    const handleDeleteUI = (id) => {
      const newArr = toDoData.filter((toDo) => {
        if(toDo.id !== id) {
          return id
        }})
      setToDoData(newArr)
    }

    //Deletes 'To Do' from API
    const handleDeleteButton = (event) => {
        axios.delete('http://localhost:9292/todos/' + id)
          .then(() => handleDeleteUI(id))
    }

    //Changes complete API and UI to 'incomplete'
    const changeToIncomplete = () => {
      axios.patch('http://localhost:9292/todos/' + id, {
        complete: false
      })
      .then(response => setTaskComplete(response.data.complete))
    }

    //Changes complete API and UI to 'complete'
    const changeToComplete = () => {
      axios.patch('http://localhost:9292/todos/' + id, {
        complete: true
      })
      .then(response => setTaskComplete(response.data.complete))
    }

  return (
    <div className="flex justify-center py-4">
        <h4 className='font-semibold'>{name}</h4>
        <br></br>
        {taskComplete
          ? <button onClick={(event) => changeToIncomplete(event)} className="ml-2 border-solid border-2 border-black rounded-md">Complete</button>
          : <button onClick={(event) => changeToComplete(event)} className="ml-2 border-solid border-2 border-black rounded-md">Incomplete</button>
        }
        <button onClick={(event) => handleDeleteButton(event)} className="ml-2 border-solid border-2 border-black rounded-md">Delete</button>
    </div>
  )
}

export default ToDo
