import './App.css';
import { store } from './store';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import EditModal from './components/EditModal/EditModal';
import Nav from './components/Nav/Nav';
function App() {
  // get currentListId from global state
  const currentListId = store((state) => state.todo(state => state.currentListId));
  const lists = store((state) => state.todo(state => state.lists));
  // get the current list
  const currentList = lists.find((list) => list.id === currentListId);

  return (
    <main className="App">
      <Nav />

      <div className='todoListContainer'>
        <h1>
          {currentList.color ? <span className='listColor' style={{ backgroundColor: currentList.color }}></span> : null}
          {currentList.name}
        </h1>
        <Form />
        <TodoList />
      </div>

      <EditModal />
    </main>
  )
}

export default App
