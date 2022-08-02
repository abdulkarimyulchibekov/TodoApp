import React from 'react'
import "./listitem.scss"

function ListItem({ item, todos, setTodos}) {

  const deleteTodo = (todoId) => {
    const filteredTodos = todos.filter(todo => (
      todo.id !== todoId
    ))
    setTodos([...filteredTodos]);
  }

  const editTodo = (todoId) => {
    const editText = prompt("Yangi to do kiriting");
    const findedTodo = todos.find(todo => todo.id === todoId)
    findedTodo.text = editText;
    setTodos([...todos])
  }

  const checkTodo = (todoId) => {
    const findedTodo = todos.find(todo => todo.id === todoId)
    findedTodo.isCompleted = !findedTodo.isCompleted;
    setTodos([...todos])
  }


  return (
    <li className='item'>
      <span>ID :{item.id}</span>
      <input className='checkbox' onChange={() => checkTodo(item.id)} defaultChecked={item.isCompleted} type="checkbox"/>
      <strong className="text">{item.text}</strong>
      <button className='edit' onClick={() => editTodo(item.id)}>Edit</button>
      <button className='delete' onClick={() => deleteTodo(item.id)}>Delete</button>
    </li>
  )
}

export default ListItem