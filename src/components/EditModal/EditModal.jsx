import './EditModal.css';
import {Close} from '../../Icons';

export default function EditModal() {

  return (
    <div className='modal'>
      <div className='modal__content'>
        <button className='btn-close'><Close color={"gray"} /></button>
        <input className='modal__input' />
        <button className='btn-save'></button>
      </div>
    </div>
  )
}