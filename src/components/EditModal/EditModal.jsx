import './EditModal.css';
import {Close} from '../../Icons';

export default function EditModal() {

  return (
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__header'>
          <h2>Edit Todo</h2>
          <button className='btn-close'><Close color={"#000"} /></button>
        </div>
        
        <input className='modal__input' />
        <button className='btn-save'>Save</button>
      </div>
    </div>
  )
}