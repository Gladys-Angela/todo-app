import React, {useEffect, useState }from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/todos")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setTodos(data);
        })
        .catch((err) => {
            if (err.name === "AbortError") {
                console.log("fetch aborted");
            }
        })
    }, []);


  return (
    <ul id='todo-list'>
        {todos.map((todo) => (
    <TodoItem todo={todo} key={todo.id} />
        ))}
       
    </ul>
  );
}

export default TodoList;