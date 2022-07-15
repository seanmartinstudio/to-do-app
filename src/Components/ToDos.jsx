import React from 'react'
import ToDo from './ToDo'

const ToDos = ( {toDoData, setToDoData} ) => {

//Add callback to Delete To Do


//Add callback to change Complete Boolean

// Renders To Dos to page
const toDoItems = toDoData.map((toDo) => (
   <ToDo name={toDo.name} key={toDo.id} id={toDo.id} category_id={toDo.category_id} complete={toDo.complete}  />
))

  return (
    <div>
        <h3 className="flex justify-center font-bold">To Dos:</h3>
        <ul>
            {toDoItems}
        </ul>
    </div>
  )
}

export default ToDos