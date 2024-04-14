import React,{useState} from 'react';
import './App.css';

function App() {
 const [count,setcount] =useState(()=>{
  console.log("fxn running");
  return 0
 });
 const [theme,setTheme]=useState(" ")

 function decrementcount() {
   setcount(prevcount => prevcount-1)
   setTheme("ground")

 }
 function incrementcount() {
   setcount(prevcount => prevcount+1)
   setTheme("sky")
 }
  return (
    <div className="container">
      <button onClick={decrementcount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementcount}>+</button>
    </div>
  );
}

export default App;
