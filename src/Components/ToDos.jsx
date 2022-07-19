import React from 'react'
import ToDo from './ToDo'

const ToDos = ( {toDoData, setToDoData} ) => {

//Add callback to Delete To Do


//Add callback to change Complete Boolean

// Renders To Dos to page
const toDoItems = toDoData.map((toDo) => (
   <ToDo name={toDo.name} key={toDo.id} id={toDo.id} category_id={toDo.category_id} complete={toDo.complete} toDoData={toDoData} setToDoData={setToDoData}  />
))

  return (
    <div>
        <h2 className="flex justify-center text-lg">To Dos:</h2>
        <ul>
            {toDoItems}
        </ul>
    </div>
  )
}

export default ToDos