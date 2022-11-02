import './TodoList.css';
import { store } from '../../store';
import Todo from '../Todo/Todo';
import { NIL as NIL_UUID } from 'uuid';

export default function TodoList() {
  // get todos from global state
  const todos = store(state => state.todo(state => state.todos));
  // get current list id from global state
  const currentListId = store(state => state.todo(state => state.currentListId));

  // filter todos in order to only display todos in current list
  let filteredTodos = todos;
  if (currentListId !== NIL_UUID) {
    filteredTodos = todos.filter((todo) => todo.listId === currentListId);
  }

  return (
    <div>
      <ul className='todolist'>
        {filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}