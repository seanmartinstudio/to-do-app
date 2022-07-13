import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



const AddToDo = ( {postToApi} ) => {

// To Do State
const [toDo, setToDo] = useState("")
// Category State
const [category, setCategory] = useState("")

// To Do and Category onSubmit to API
const handleSubmit = (event) => {
    event.preventDefault()
    postToApi(event, toDo, category)
    // axios.post('http://localhost:9292/categories-todos', {
    //     to_do_name: toDo,
    //     category_name: category,
    //     complete: false
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
 
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