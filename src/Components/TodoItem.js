import React from 'react'

const TodoItem = () => (
  <ul className="todo-list">
    <li className="completed">
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
        />
        <label>
          {"Here is Title"}
        </label>
        <button className="destroy" />
      </div>
      <input
        className="edit"
        defaultValue='Editing Text here'
      />
    </li>
  </ul>
)

export default TodoItem
