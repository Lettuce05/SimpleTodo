import './Form.css';
export default function Form() {
  return (
    <form>
      <div className='form'>
        <input className='form__input' type='text' placeholder='Write a new task' />
        <button className='btn-submit'>+</button>
      </div>
    </form>
  )
}