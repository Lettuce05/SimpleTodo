import './App.css'
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import EditModal from './components/EditModal/EditModal';
function App() {

  return (
    <div className="App">
      <main>
        <div className='todoListContainer'>
          <h1>Todos</h1>
          <Form />
          <TodoList />
        </div>
      </main>
      <EditModal />
    </div>
  )
}

export default App
