import './Todo.css';
import { store } from '../../store';

export default function Todo({ todo }) {
  // import state functions
  const setTodoStatus = store((state) => state.todo(state => state.setTodoStatus));
  const removeTodo = store((state) => state.todo(state => state.removeTodo));
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
        <button onClick={() => removeTodo(id)}>trash</button>
      </div>

    </div>
  )
}