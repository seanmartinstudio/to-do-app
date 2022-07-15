import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

const ToDo = ( {name, key, id, category_id, complete} ) => {

    const [deleteButton, setDeleteButton] = useState("")

    const [completeCheckBox, setCompleteCheckBox] = useState("")

    

    const handleDeleteButton = (event) => {
        axios.delete('http://localhost:9292/todos/' + id)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    const handleComplete = (event) => {
        console.log(id)
        // setCompleteCheckBox(event.target.checked)
        //if complete === true, change complete API value to true and update state
        //else, complete API value === false
    }

    // useEffect(() => console.log(complete),[complete])



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


//Need to update state after Delete
//Need to build out check box for Complete boolean (event.target.checked returns T or F)