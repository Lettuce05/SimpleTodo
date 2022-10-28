import './Todo.css';
import { store } from '../../store';
import { Trash } from '../../Icons';

export default function Todo({ todo }) {
  // get state functions
  const setTodoStatus = store((state) => state.todo(state => state.setTodoStatus));
  const removeTodo = store((state) => state.todo(state => state.removeTodo));
  const openModal = store((state) => state.editModal(state => state.openModal));
  // destructure todo prop
  const { text, completed, id } = todo;

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
        <button className='btn-trash' onClick={() => openModal(id)}><Trash size={24} color={"gray"} /></button>
        <button className='btn-trash' onClick={() => removeTodo(id)}><Trash size={24} color={"gray"} /></button>
      </div>

    </div>
  )
}