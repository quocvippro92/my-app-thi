import * as yup from 'yup';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import TodoListRouter from './page/TodoListRouter';
function App() {
  return (
    <div className="container">
      <div className='app-wrapper'>
        <BrowserRouter>
          <TodoListRouter/>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
