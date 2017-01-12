const TodoCommandHandler = {

  CreateTodo (arg) {
    const title = arg.title
    return this.$aggregate
      .create('Todo', {title})
      .then((todo) => todo.$save())
  },

  ChangeTodoTitle (arg) {
    const title = arg.title
    const todoId = arg.todoId
    return this.$aggregate
      .load('Todo', todoId)
      .then(todo => {
        todo.changeTitle({title})
        return todo.$save()
      })
  },

  FinishTodo (arg) {
    return this.$aggregate
      .load('Todo', arg.todoId)
      .then(todo => {
        todo.finish()
        return todo.$save()
      })
  }
}

export default TodoCommandHandler
