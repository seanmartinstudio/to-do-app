import React from 'react'
import { useState } from 'react'


const AddToDo = () => {

// State to create controlled form
const [toDo, setToDo] = useState("")
const [category, setCategory] = useState("")

// To Do onChange
const handleToDo = (event) => {
    event.preventDefault()
    setToDo(event.target.value)
    console.log("To Do onChange =>", toDo)
}

// Category onChange
const handleCategory = (event) => {
    setCategory(event.target.value)
    console.log("Category onChange =>", category)
}

// To Do and Category onSubmit (add API post here)
const handleSubmit = (event) => {
    event.preventDefault()
    console.log("To Do onSubmit =>", toDo)
    console.log("Category onSubmit =>", category)
}

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex justify-center">

            <input onChange={handleToDo} value={toDo} type='text' className="resize-none rounded-md border-solid border-2 border-black" ></input>

            {/* <textarea onChange={handleCategory} type='text'className="resize-none rounded-md border-solid border-2 border-black" ></textarea> */}

            <select onChange={handleCategory} name="categories" className="resize-none rounded-md border-solid border-2 border-black">
                <option value="none">Categories</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option name="Education">Education</option>
            </select>

            <button type='submit' class="border-solid border-2 border-black rounded-md">Add</button>

        </form>
    </div>
  )
}

export default AddToDo