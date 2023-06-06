import './App.css'
import {useState} from 'react'
import Header from './Components/Header';
import Counter from './Counter';


function App() {
  const [count,setCount] =useState(0)
  const data = 'AjaxMusic'
  const addCount =()=>{
    setCount(count+1)
    console.log(count);
  }
  let obj = {
    title:'1st Counter',
    count
  }
  
  return (
    <div>
   
   <p>This is a Discription <br/> {data}</p>
   <Header data={data}/>
   <button onClick={addCount}>Add</button>
   <Counter {...obj}/>
   <Counter title='2nd Counter' count={count}/>
   </div>
  );
}

export default App;

