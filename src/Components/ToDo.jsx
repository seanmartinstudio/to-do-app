import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

const ToDo = ( {name, key, id, category_id, complete, toDoData, setToDoData} ) => {

    const [completeCheckBox, setCompleteCheckBox] = useState("")

    //Deletes To Do from UI
    const handleDeleteUI = (id) => {
      const newArr = toDoData.filter((toDo) => {
        if(toDo.id !== id) {
          return id
        }})
      setToDoData(newArr)
    }

    //Deletes To Do from API
    const handleDeleteButton = (event) => {
        axios.delete('http://localhost:9292/todos/' + id)
          .then(() => handleDeleteUI(id))
    }
    

    const handleCheckBoxUI = (id) => {
      //build out function to persis checkbox on rerender
    }

    const handleComplete = (event) => {
        axios.patch('http://localhost:9292/todos/' + id, {
          complete: event.target.checked
        })
    }

  return (
    <div className="flex justify-center px-8">
        <input onClick={(event) => handleComplete(event)} type='checkbox' value='complete' className="ml-2 border-solid border-2 border-black rounded-md"></input>
        <h4>{name}</h4>
        <br></br>
        <button onClick={(event) => handleDeleteButton(event)} className="ml-2 border-solid border-2 border-black rounded-md">Delete</button>
    </div>
  )
}

export default ToDo




// need to persist beckbox on page rerender
// use boolean of event.target.checkbox to persist checkbox ui