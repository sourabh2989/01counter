import { useState } from 'react';

// import './App.css';

function App() {  

  let [addvalue,setAddvalue]=useState(0);
  
   
  const add=()=>{
    
    setAddvalue(addvalue+1)
      
  }
  const less=()=>{
    setAddvalue(addvalue-1);
  }
 
  return (
  <>
  <h3>counter board</h3>
  <h4>counter value ={addvalue} </h4>
  <button onClick={add} name='addvalue' disabled={addvalue<20?false:true}>add value</button>
  <br /><br />
  <button onClick={less} disabled={addvalue==0?true:false}>less value</button>
  </>
  );
}

export default App;
