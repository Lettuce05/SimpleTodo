import './App.css';
import { store } from './store';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import EditModal from './components/EditModal/EditModal';
import Nav from './components/Nav/Nav';
import { Menu } from './Icons';

function App() {
  // get state functions from global state
  const openNav = store((state) => state.nav(state => state.openNav));
  const navOpen = store((state) => state.nav(state => state.open));
  // get currentListId from global state
  const currentListId = store((state) => state.todo(state => state.currentListId));
  // get lists from global state
  const lists = store((state) => state.todo(state => state.lists));
  // get the current list
  const currentList = lists.find((list) => list.id === currentListId);

  return (
    <main className="App">
      <Nav />
      <a className={'btn-menu'} onClick={() => openNav()}><Menu /></a>
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
