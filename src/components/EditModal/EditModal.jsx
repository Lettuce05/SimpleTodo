import './EditModal.css';
import { store } from '../../store';
import { Close } from '../../Icons';
import { NIL as NIL_UUID } from 'uuid';

export default function EditModal() {
  // get state actions from global state
  const closeModal = store((state) => state.editModal(state => state.closeModal));
  const setEditInputText = store((state) => state.editModal(state => state.setEditInputText));
  const setEditListInput = store((state) => state.editModal(state => state.setEditListInput));
  const editTodo = store((state) => state.todo(state => state.editTodo));

  // import necessary state from global state
  const modalShown = store((state) => state.editModal(state => state.modalShown));
  const lists = store((state) => state.todo(state => state.lists));
  const editId = store((state) => state.editModal(state => state.editId));
  const editInputText = store((state) => state.editModal(state => state.editInputText));
  const editListInput = store((state) => state.editModal(state => state.editListInput));


  /*
    handleInputChange: event handler that sets editInputText state on input change
    @param e - event triggered
  */
  function handleInputChange(e) {
    setEditInputText(e.target.value);
  }

  /*
    handleListChange: event handler that sets editListInput state on select change
    @param e - event triggered
  */
  function handleListChange(e) {
    setEditListInput(e.target.value);
  }

  /*
    handleSubmit: event handler that updates specified todo when form is submitted
    @param e - event triggered
  */
  function handleSubmit(e) {
    e.preventDefault();

    if (!editInputText.trim()) {
      // input is empty so don't save
      return;
    } else {
      // input is not empty so save user changes (even if they are the same)
      editTodo(editId, editInputText.trim(), editListInput);
      closeModal();
    }
  }

  // returns a new list option
  function ListOption({ list }) {
    return (
      <option value={list.id}>{list.name}</option>
    )
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
          <select className='modal__listSelect' value={editListInput} onChange={handleListChange}>
            <option value={NIL_UUID}>No List</option>
            {lists.filter((list) => list.id !== NIL_UUID).map((list) => <ListOption key={list.id} list={list} />)}
          </select>
          <button className='btn-save' onClick={handleSubmit}>Save</button>
        </form>

      </div>
    </div>
  )
}