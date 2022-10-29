import './EditModal.css';
import { store } from '../../store';
import { Close } from '../../Icons';

export default function EditModal() {
  const closeModal = store((state) => state.editModal(state => state.closeModal));
  const modalShown = store((state) => state.editModal(state => state.modalShown));
  const editInputText = store((state) => state.editModal(state => state.editInputText));
  const setEditInputText = store((state) => state.editModal(state => state.setEditInputText));
  const editId = store((state) => state.editModal(state => state.editId));
  const editTodo = store((state) => state.todo(state => state.editTodo));

  /*
    handleInputChange: event handler that sets editInputText state on input change
    @param e - event triggered
  */
  function handleInputChange(e) {
    setEditInputText(e.target.value);
  }

  /*
    handleSubmit: event handler that updates specified todo when form is submitted
    @param e - event triggered
  */
  function handleSubmit(e) {
    e.preventDefault();

    if (!editInputText.trim()) {
      // input is empty so don't save
      closeModal();
    } else {
      // input is not empty so save user changes (even if they are the same)
      editTodo(editId, editInputText.trim());
      closeModal();
    }
  }

  return (
    <div className={`modal ${modalShown ? 'modal-shown' : ''}`}>
      <div className='modal__content'>
        <div className='modal__header'>
          <h2>Edit Todo</h2>
          <button className='btn-close' onClick={closeModal}><Close color={"#000"} /></button>
        </div>

        <form className='modal__form'>
          <input className='modal__input' value={editInputText} onChange={handleInputChange} />
          <button className='btn-save' onClick={handleSubmit}>Save</button>
        </form>

      </div>
    </div>
  )
}