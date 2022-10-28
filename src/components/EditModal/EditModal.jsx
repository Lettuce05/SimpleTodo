import './EditModal.css';
import { store } from '../../store';
import {Close} from '../../Icons';

export default function EditModal() {
  const closeModal = store((state) => state.editModal(state => state.closeModal));
  const modalShown = store((state) => state.editModal(state => state.modalShown));
  const editInputText = store((state) => state.editModal(state => state.editInputText));
  const setEditInputText = store((state) => state.editModal(state => state.setEditInputText));
  const editId = store((state) => state.editModal(state => state.editId));

  /*
    handleInputChange: event handler that sets editInputText state on input change
    @param e - event triggered
  */
  function handleInputChange(e) {
    setEditInputText(e.target.value);
  }
  
  return (
    <div className={`modal ${modalShown ? 'modal-shown' : ''}`}>
      <div className='modal__content'>
        <div className='modal__header'>
          <h2>Edit Todo</h2>
          <button className='btn-close' onClick={closeModal}><Close color={"#000"} /></button>
        </div>
        
        <input className='modal__input' value={editInputText} onChange={handleInputChange}/>
        <button className='btn-save'>Save</button>
      </div>
    </div>
  )
}