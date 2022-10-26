import './Todo.css';
import { store } from '../../store';

export default function Todo({ todo }) {
  const setTodoStatus = store((state) => state.todo(state => state.setTodoStatus));
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
        <button>trash</button>
      </div>
      
    </div>
  )
}