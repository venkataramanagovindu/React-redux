import logo from './logo.svg';
import './App.css';
import { MyButton } from './mybutton';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';
import { WelcomeClass } from './components/classComonent';
import { act } from 'react-dom/test-utils';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  function handleClick(){
      setCount(count + 1);
  }

  const increment = () => {
    // dispatch(actions.increment());
    dispatch({type: 'INC'});
  }
  
  const decrement = () => {
    // dispatch(actions.decrement());
    dispatch({type: 'DEC'});
  }

  const addBy = () => {
    // dispatch(actions.add(10));
    dispatch({type: 'ADD', payload: 5});
  }

  return (
    <div className="App">
      <header className="App-header">

        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Profile</li>
        </ul>

        <MyButton count={count} onClick={handleClick} />

        <MyButton count={count} onClick={handleClick}/>
        <br/>
        <div>Hello</div>

        <h1>Counter App</h1>

        <h2>{counter}</h2>

        <WelcomeClass name='venkat'/>

        Class vs Functional
        Class = statefull
        Functional = stateless
        What is JSX
        Why we use bind in class component
        Rect vs other frameworks
        Hooks - (Usememo, reactmemo, usecallback ) (useContext, to stop rerender, ), UseState, (UseEffect - Know the params and functionality) 
        Higher order functions and HO components diff
        pure functions/components and inpure functions (related hooks)
        Life cycle methods
        Data sharing and  binding
        Nested data transfer
        Fetch the data from API using UseEffect
        classComponent - componentDidMount, didUpdate, willUnmount
        How to prevent from rerendering of a components? (Using useeffect)
        Reconsilation
        virtualdom
        portals
        npm vs npx
        es6 features - spread, rest, destructuring
        prop drilling
        context api 
        react algo


        

        React redux



        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addBy}>Add By 5</button>




      </header>
    </div>
  );
}

export default App;
