export let todoCountReadModel = 0

export const todoCountProjection = {
  initialize (params, done) {
    return done()
  },
  handleTodoCreated (domainEvent) {
    return todoCountReadModel++
  }
}
