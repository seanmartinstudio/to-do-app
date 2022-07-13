import React from 'react'
import ToDo from './ToDo'

const ToDos = ( {toDoData} ) => {

const listToDoData = toDoData.map((toDo) => (
   <ToDo name={toDo.name}/>
))

  return (
    <div>
        <h3 className="flex justify-center ">To Dos:</h3>
        <ul>
        {listToDoData}
        </ul>
    </div>
  )
}

export default ToDos