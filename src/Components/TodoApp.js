import React from 'react'
import AddTodoItem from './AddTodoItem'
import TodoItems from './TodoItems'
import Footer from './Footer'

const TodoApp = () => (
  <div>
    <AddTodoItem />
    <TodoItems />
    <Footer />
  </div>
)

export default TodoApp