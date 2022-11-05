import './Link.css';
import { store } from '../../store';
import { NIL as NIL_UUID } from 'uuid';
import { Trash } from '../../Icons';

export default function Link({ list }) {
  // get necessary state from global state
  const todos = store(state => state.todo(state => state.todos));
  const currentListId = store(state => state.todo(state => state.currentListId));
  // get state actions from global state
  const setCurrentListId = store(state => state.todo(state => state.setCurrentListId));
  const openModal = store(state => state.removeModal(state => state.openModal));

  // defaults to be used for home list
  let listColor = "transparent";
  let listTodos = todos.filter((todo) => !todo.completed);
  let isHome = true;
  // check if current list is not the home list
  if (list.id !== NIL_UUID) {
    listColor = list.color;
    listTodos = todos.filter((todo) => todo.listId === list.id && !todo.completed);
    isHome = false;
  }



  return (
    <a className='link' onClick={() => setCurrentListId(list.id)} style={{ backgroundColor: list.id === currentListId ? '#f4f4f7' : '' }}>
      <div className='link__info'>
        <span className='listColor' style={{ backgroundColor: listColor }}></span>
        <span className='link__name'>{list.name}</span>
      </div>

      <div className='link__right'>
        {!isHome ? <span className='btn-trash' onClick={() => openModal(list.id)}><Trash size={18} color='gray' /></span> : null}
        <span className='link__todoCount'>{listTodos.length}</span>
      </div>
    </a>
  )
}