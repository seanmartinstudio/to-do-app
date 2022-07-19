import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AddToDo = ( {postToApi} ) => {

// To Do State
const [toDo, setToDo] = useState("")

// Category State
const [category, setCategory] = useState("")

// onSubmit envokes API Post in App componenet
const handleSubmit = (event) => {
    event.preventDefault()
    postToApi(event, toDo, category)
}

  return (
    <div className='py-8'>
        <form onSubmit={(event) => handleSubmit(event)} className="flex justify-center ">

            <label className='px-2'>To Do</label>
            <input onChange={(event) => setToDo(event.target.value)} type='text' name='To Do'  className="resize-none rounded-md border-solid border-2 border-black"></input>
            <label className='px-2'>Category</label>
            <input onChange={(event) => setCategory(event.target.value)} type='text' name='Category'  className="resize-none rounded-md border-solid border-2 border-black"></input>

            <button type='submit' class="ml-2 border-solid border-2 border-black rounded-md">Add</button>

        </form>
    </div>
  )
}

export default AddToDo