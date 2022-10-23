import { store } from '../../store';

export default function TodoList() {
  const todos = store(state => state.todo(state => state.todos));
  return (
    <div>
      {todos.map((todo) => <div>{todo.text}</div>)}
    </div>
  )
}