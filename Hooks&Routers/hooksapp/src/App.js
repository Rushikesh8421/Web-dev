import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  function countInitial(){
    console.log("Hello world");
    return 4;
  }

  const [count,setCount] = useState(()=>countInitial());

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }


  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
