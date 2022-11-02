import './App.css';
import { store } from './store';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import EditModal from './components/EditModal/EditModal';
function App() {
  // get currentListId from global state
  const currentListId = store((state) => state.todo(state => state.currentListId));
  const lists = store((state) => state.todo(state => state.lists));
  // get the current list
  const currentList = lists.find((list) => list.id === currentListId);
  return (
    <div className="App">
      <main>
        <div className='todoListContainer'>
          <h1>{currentList.name}</h1>
          <Form />
          <TodoList />
        </div>
      </main>
      <EditModal />
    </div>
  )
}

export default App
