import './App.css';
import {useSelector} from 'react-redux'
import TodoList from './Components/TodoList/TodoList'

function App() {
  const state = useSelector((state) => ({...state}));
  console.log("state",state);

  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
