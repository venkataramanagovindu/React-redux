import logo from './logo.svg';
import './App.css';
import {MyButton} from './mybutton';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  function handleClick(){
      setCount(count + 1);
  }

  const increment = () => {
    dispatch({type: 'INC'});
  }
  
  const decrement = () => {
    dispatch({type: 'DEC'});
  }

  const addBy = () => {
    dispatch({type: 'ADD', payload: 5});
  }



  return (


    <div className="App">
      <header className="App-header">

        <MyButton count={count} onClick={handleClick} />

        <MyButton count={count} onClick={handleClick}/>
        <br/>
        <div>Hello Ravali</div>

        <h1>Counter App</h1>

        <h2>{counter}</h2>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addBy}>Add By 5</button>




      </header>
    </div>
  );
}

export default App;
