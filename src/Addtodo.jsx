import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Addtodo = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const [todoText, setTodoText] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type:"ADD_TODO", payload:[...selector.todo, todoText]});
    }

  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTodoText(e.target.value)} />
            <input type="submit" />
        </form>
        {
            selector.todo.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Addtodo