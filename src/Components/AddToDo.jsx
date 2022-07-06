import React from 'react'
import { useState } from 'react'


const AddToDo = () => {

const [toDo, setToDo] = useState("")
const [category, setCategory] = useState("")

const handleToDo = (event) => {
    event.preventDefault()
    setToDo(event.target.value)
    // console.log("To Do =>", toDo)
}

const handleCategory = (event) => {
    setCategory(event.target.value)
    // console.log("Category =>", category)
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(toDo)
    console.log(category)
}

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex justify-center">
            <textarea onChange={handleToDo} value={toDo} type='text' className="resize-none rounded-md border-solid border-2 border-black" ></textarea>
            <textarea onChange={handleCategory} type='text'className="resize-none rounded-md border-solid border-2 border-black" ></textarea>
            <button type='submit' class="border-solid border-2 border-black rounded-md">Add</button>
        </form>
    </div>
  )
}

export default AddToDo