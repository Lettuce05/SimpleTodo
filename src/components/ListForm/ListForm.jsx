import React, { useState } from 'react';
import './ListForm.css';
import { store } from '../../store';

export default function ListForm() {
  // import state function from global state
  const addList = store((state) => state.todo(state => state.addList));

  // state to hanlde form inputs
  const [color, setColor] = useState('#000');
  const [name, setName] = useState('');

  // handleSubmit: checks if name is not empty and adds new list
  function handleSubmit(e) {
    e.preventDefault();
    // do nothing if name is empty
    if (!name.trim()) {
      return;
    }
    // add list since name and color are not empty
    addList(name.trim(), color);
    setName('');
  }

  // handleColorChange: sets color state when color input value changes
  function handleColorChange(e) {
    setColor(e.target.value);
  }

  // handleNameChange: sets name state when name input value changes
  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form className='listForm'>
        <input
          value={name}
          className='listForm__name'
          placeholder='Create new list'
          type='text'
          onChange={handleNameChange}
        />
        <input
          value={color}
          className='listForm__color'
          type='color'
          onChange={handleColorChange}
        />
        <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  )
}