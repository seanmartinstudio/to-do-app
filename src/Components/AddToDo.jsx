import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

 const toDoInitialState = {
    name: "",
    category_id: null,
    complete: false
 }

 const categoryInitialState = {
    name: ""
 }

const AddToDo = () => {

// To Do State
const [toDo, setToDo] = useState(toDoInitialState)
// Category State
const [category, setCategory] = useState(categoryInitialState)

// To Do onChange
const handleToDo = (event) => {
    setToDo({
        ...toDoInitialState,
        name: event.target.value
    })
    console.log("To Do onChange =>", toDo)
}

// Category onChange
const handleCategory = (event) => {
    setCategory({
        ...categoryInitialState,
        name: event.target.value
    })
    console.log("Category onChange =>", category)
}

// To Do and Category onSubmit to API
const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:9292/add_category', category)
    .then(() => setCategory(categoryInitialState))
    console.log("Category onSubmit =>", category)
    // axios.post('http://localhost:9292/add_todo', toDo)
    // .then(() => setToDo(toDoInitialState))
    // console.log("To Do onSubmit =>", toDo)
}

  return (
    <div className='py-8'>
        <form onSubmit={handleSubmit} className="flex justify-center ">

            <label className='px-2'>To Do</label>
            <input onChange={handleToDo} type='text' name='To Do' className="resize-none rounded-md border-solid border-2 border-black"></input>
            <label className='px-2'>Category</label>
            <input onChange={handleCategory} type='text' className="resize-none rounded-md border-solid border-2 border-black"></input>

            <button type='submit' class="ml-2 border-solid border-2 border-black rounded-md">Add</button>

        </form>
    </div>
  )
}

export default AddToDo