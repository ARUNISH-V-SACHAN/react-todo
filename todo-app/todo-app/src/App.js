
import './App.css';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import TodoItems from './components/todoItems';

function App() {
  return (

    <div className='continer'> 
      <div className='row' style={{alignItems:'center'}}></div>
      <TodoInput/>
      <TodoList/>
     

    </div>
  );
}

export default App;
