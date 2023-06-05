import './App.css'
import Header from './Components/Header';


function App() {
  const data = 'AjaxMusic'
  return (
    <div>
   
   <p>This is a Discription <br/> {data}</p>
   <Header data={data}/>
   </div>
  );
}

export default App;

