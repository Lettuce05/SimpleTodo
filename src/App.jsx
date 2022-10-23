import './App.css'
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
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

    </div>
  )
}

export default App
