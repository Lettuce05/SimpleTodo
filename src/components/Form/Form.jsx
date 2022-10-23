import './Form.css';
import { store } from '../../store';
export default function Form() {
  const inputText = store((state) => state.form(state => state.inputText));
  const setInputText = store((state) => state.form(state => state.setInputText));
  const addTodo = store((state) => state.todo(state => state.addTodo));

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputText);
    setInputText("");
  }

  return (
    <form>
      <div className='form'>
        <input value={inputText} onChange={handleInputChange} className='form__input' type='text' placeholder='Write a new task' />
        <button onClick={handleSubmit} className='btn-submit'>+</button>
      </div>
    </form>
  )
}