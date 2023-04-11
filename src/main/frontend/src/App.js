import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
/*
  useEffect(() => {
    fetch("/api/helloworld")
        .then((response) => response.text())
        .then(message => {
            setMessage(message);
        });
    console.log("@" + message);
  }, [])
*/

  useEffect(() => {
    axios.get('/api/ex/helloworld')
        .then(response => setMessage(response.data))
        .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>백엔드에서 가져온 내용 : {message}</p>
      </header>
    </div>
  );
}

export default App;
