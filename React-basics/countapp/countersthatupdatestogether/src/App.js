import { useState } from 'react';
import './App.css';

export default function App() {

  const [count,setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <h1>Counters that updates together</h1>
      <MyButton count={count} onClick={handleClick} />
      <p></p>
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({count,onClick}) {
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
