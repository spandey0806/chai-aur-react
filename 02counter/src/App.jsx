import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter =15;

  let [counter , setCounter] = useState(15);

  const addValue =()=>{
    // counter = counter+1;
    // console.log('clicked',counter);
    counter =counter+1
    if(counter<20){
 setCounter(counter);
    }
    console.log('Clicked', counter+1);
  }
  const removeValue=()=>{
    counter =counter-1
    if(counter>0){
 setCounter(counter);
    }
  }
  return (
    <>
       <h1>Chai aur React</h1>
       <h2>Counter Value : {counter}</h2>
       <button 
       onClick={addValue}
       >Add value : {counter}</button>
       <br/>
       <button
       onClick ={removeValue}
       >Remove value :{counter}</button>
    </>
  )
}

export default App
