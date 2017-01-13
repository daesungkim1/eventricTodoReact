import React from 'react'

const Footer = () => (
  <footer className="footer">
    <span className="todo-count">
      <strong>10</strong> 10 left
    </span>
    <ul className="filters">
      <li>
        <a href="#/" className="selected" >All</a>
      </li>
      {' '}
      <li>
        <a href="#/active">Active</a>
      </li>
      {' '}
      <li>
        <a href="#/completed" >Completed</a>
      </li>
    </ul>
    {/* null if */}
    <button
      className="clear-completed">
      Clear completed
    </button>
  </footer>
)

export default Footer
