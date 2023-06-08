import './App.css'
import {useState} from 'react'
import Counter from './Counter';


function App() {
  const [state,setState] =useState(false)
 
  
  
  return (
    <div> 
   <button onClick={()=>setState(!state)}>show or hide</button>
   {state && <Counter/> }
  
   </div>
  );
}

export default App;

