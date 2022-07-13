import React from 'react'
import ToDo from './ToDo'

const ToDos = ( {toDoData} ) => {

// Renders To Dos to page
const toDoItems = toDoData.map((toDo) => (
   <ToDo name={toDo.name} key={toDo.id} />
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