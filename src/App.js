import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() =>{
    async function fetchData(){
      const res = await fetch('http://localhost:8888')
      const json = await res.json()
      console.log(json)
    }
    fetchData()
  }, [])
  //Component DEBUG in Inspect - is the Component Rendering 
  console.log('<App /> Rerender!')
  return (
    <div className="App">
     
     <h1>Hello World</h1>
    </div>
  );
}

export default App;
