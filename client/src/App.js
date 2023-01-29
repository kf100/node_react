import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/Home")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  
  function myfunction(){
    return(
        fetch("http://localhost:8000/random")
          .then((res) => res.json())
          .then((data) => setMessage("Random Number"+data.number))      
    )
  }

  return (
    <div className="App">
    <h>Hello</h>
      <h1>{message}</h1>
      <div id="number"></div>
      <button onClick={myfunction}>Click Here to increment</button>
      
    </div>  
  );
}

export default App;