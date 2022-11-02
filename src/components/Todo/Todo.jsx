import './Todo.css';
import { NIL as NIL_UUID } from 'uuid';
import { store } from '../../store';
import { Trash, Pencil } from '../../Icons';

export default function Todo({ todo }) {
  // get state functions
  const setTodoStatus = store((state) => state.todo(state => state.setTodoStatus));
  const removeTodo = store((state) => state.todo(state => state.removeTodo));
  const openModal = store((state) => state.editModal(state => state.openModal));
  // get lists from global state
  const lists = store((state) => state.todo(state => state.lists));

  // destructure todo prop
  const { text, completed, id, listId } = todo;
  // get todo's list
  let list = lists.find((list) => list.id === listId);

  let listColor = "transparent";
  if (list.id !== NIL_UUID) {
    listColor = list.color;
  }


  return (
    <div className='todo'>

      <div>
        <label className='todo__checkbox'>
          <input type="checkbox" checked={completed} onChange={() => setTodoStatus(id)} />
          <li className='todo__text'>{text}</li>
          <span className='todo__customCheckbox'></span>
        </label>
      </div>

      <div>
        <button className='btn' onClick={() => openModal(id, text, listId)}><Pencil size={22} color={"gray"} /></button>
        <button className='btn' onClick={() => removeTodo(id)}><Trash size={24} color={"gray"} /></button>
        <div className='listBadge' style={{ backgroundColor: listColor }}></div>
      </div>

    </div>
  )
}