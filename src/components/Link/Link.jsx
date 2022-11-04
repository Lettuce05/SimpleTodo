import './Link.css';
import { store } from '../../store';
import { NIL as NIL_UUID } from 'uuid';

export default function Link({ list }) {
  // get todos from global state
  const todos = store(state => state.todo(state => state.todos));
  // get state function from global state
  const setCurrentListId = store(state => state.todo(state => state.setCurrentListId));

  let listColor = "transparent";
  let listTodos = todos.filter((todo) => !todo.completed);
  if (list.id !== NIL_UUID) {
    listColor = list.color;
    listTodos = todos.filter((todo) => todo.listId === list.id && !todo.completed);
  }



  return (
    <a className='link' onClick={() => setCurrentListId(list.id)}>
      <div className='link__info'>
        <span className='listColor' style={{ backgroundColor: listColor }}></span>
        <span className='link__name'>{list.name}</span>
      </div>

      <div>
        <span className='link__todoCount'>{listTodos.length}</span>
      </div>
    </a>
  )
}