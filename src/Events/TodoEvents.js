const TodoEvent = {

  TodoCreated (arg) {
    return this.title = arg.title
  },

  TodoTitleChanged (arg) {
    return this.title = arg.title
  },

  TodoFinished () {}
}

export default TodoEvent
