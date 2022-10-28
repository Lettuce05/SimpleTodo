import './Form.css';
import { store } from '../../store';
export default function Form() {
  // get input state from global state
  const inputText = store((state) => state.form(state => state.inputText));
  // get reference to state functions
  const setInputText = store((state) => state.form(state => state.setInputText));
  const addTodo = store((state) => state.todo(state => state.addTodo));

  /*
    handleInputChange: event handler that sets inputText state on input change
    @param e - event triggered
  */
  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  /*
    handleSubmit: event handler that adds new todo when form is submitted
    @param e - event triggered
  */
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