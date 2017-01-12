export let todosReadModel = {}

export const todosProjection = {
  initialize (params, done) {
    return done()
  },
  handleTodoCreated (domainEvent) {
    return todosReadModel[domainEvent.aggregate.id] = {
      title: domainEvent.payload.title
    }
  },
  handleTodoTitleChanged (domainEvent) {
    return todosReadModel[domainEvent.aggregate.id].title =
      domainEvent.payload.title
  },
  handleTodoFinished (domainEvent) {
    return todosReadModel[domainEvent.aggregate.id].isFinished = true
  }
}
