import './RemoveListModal.css';
import { store } from '../../store';
import { Close } from '../../Icons';

export default function RemoveListModal() {
  // import state actions from global state
  const closeModal = store((state) => state.removeModal(state => state.closeModal));
  const removeList = store((state) => state.todo(state => state.removeList));
  // import necessary state from global state
  const modalShown = store((state) => state.removeModal(state => state.modalShown));
  const removeId = store((state) => state.removeModal(state => state.removeId));
  const lists = store((state) => state.todo(state => state.lists));

  // get list object that corresponds with removeId
  let list = lists.find((list) => list.id === removeId);
  let listName = '';
  if(list){
    listName = list.name;
  }

  // handleDelete: deletes the specified list and closes the modal
  function handleDelete(){
    removeList(removeId);
    closeModal();
  }
  
  return (
    <div className={`modal ${modalShown ? 'modal-shown' : ''}`}>
      <div className='modal__content'>
        <div className='modal__header'>
          <h2>Delete List</h2>
          <button className='btn-close' onClick={closeModal}><Close color={"#000"} /></button>
        </div>
        <p className='modal__question'>Are you sure you want to delete the <span className='listName-remove'>{listName}</span> list?</p>
        <p className='modal__warning'>WARNING: Deleting this list will delete all of its todos as well.</p>
        <button className='btn-remove' onClick={handleDelete}>Yes, Delete List</button>
      </div>
    </div>
  )
}