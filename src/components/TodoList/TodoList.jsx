import './TodoList.css';
import { store } from '../../store';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const todos = store(state => state.todo(state => state.todos));
  return (
    <div>
      <ul className='todolist'>
        {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}