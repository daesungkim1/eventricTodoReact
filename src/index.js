import TodoContext from './TodoContext'

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
