export default class Todo {
  
  create (arg) {
    const title = arg.title;
    if (!title) {
      throw new Error('title is missing')
    }
    return this.$emitDomainEvent('TodoCreated', {title})
  }

  changeTitle (arg) {
    const title = arg.title
    if (!title) {
      throw new Error('title is missing')
    }
    if (this.isFinished) {
      throw new Error('todo already finished')
    }
    return this.$emitDomainEvent('TodoTitleChanged', {title})
  }

  finish () {
    return this.$emitDomainEvent('TodoFinished')
  }

  handleTodoFinished () {
    return this.isFinished = true
  }
}