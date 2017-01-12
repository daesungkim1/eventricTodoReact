import eventric from 'eventric'
import TodoEvents from './Events/TodoEvents'
import TodoAggregate from './Aggregates/TodoAggregate'
import TodoCommandHandler from './CommandHandlers/TodoCommandHandler'

import {todosProjection, todosReadModel} from './Projections/TodoProjection'
import {todoCountProjection, todoCountReadModel} from './Projections/TodoCountProjection'

const TodoContext = eventric.context('Todo')

TodoContext
  .defineDomainEvents(TodoEvents)
  .addAggregate('Todo', TodoAggregate)
  .addCommandHandlers(TodoCommandHandler)
  .addProjection(todosProjection)
  .addProjection(todoCountProjection)
  .addQueryHandlers({
    getTodoList (param) {
      return todosReadModel
    },
    getTodoCount (param) {
      return todoCountReadModel
    }
  })

// add EventHandlers
TodoContext.subscribeToDomainEvent('TodoCreated', function(domainEvent) {
  return console.log('TodoCreated todo', domainEvent.aggregate.id);
})
TodoContext.subscribeToDomainEvent('TodoTitleChanged', function(domainEvent) {
  return console.log('TodoTitleChanged todo', domainEvent.aggregate.id);
})
TodoContext.subscribeToDomainEvent('TodoFinished', function(domainEvent) {
  return console.log('finished todo', domainEvent.aggregate.id);
})


export default TodoContext
