import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = () => (
  <section className="main">
    <input
      className="toggle-all"
      type="checkbox"
    />
    <ul className="todo-list">
      <TodoItem />
    </ul>
  </section>
)

export default TodoItems
