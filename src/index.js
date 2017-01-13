import React from 'react'
import { render } from 'react-dom'
import TodoApp from './Components/TodoApp'
import TodoContext from './TodoContext'

import './index.css'

render (
  <TodoApp />,
  document.getElementById('root')
)

// initialize
TodoContext
  .initialize()
  .then(() => TodoContext.command('CreateTodo', {title: 'My first todo'}))
  .then(() => TodoContext.command('CreateTodo', {title: 'My second todo'}))
  .then(todoId =>
    TodoContext
      .command('ChangeTodoTitle', {
        todoId,
        title: 'My second changed todo'
      })
      .then(() => TodoContext.command('FinishTodo', { todoId }))
  )
  .then(() => TodoContext.query('getTodoList', {}))
  .then((todoList) => {
    console.log('current todos:', todoList)
    return TodoContext.query('getTodoCount')
  })
  .then((todoCount) => console.log('current todo count:', todoCount))
