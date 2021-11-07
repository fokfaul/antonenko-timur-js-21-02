import './App.css';
import {Header} from './components/header/Header';
import ToDoList from './todolist/ToDoList';

function App() {
  return (
    <div className="App">
        <Header/>
        <ToDoList/>
    </div>
  );
}

export default App;
