import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';



function App() {
  
  const assertion ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyQVd3Y1J4dTZWeXNTb1ZqbnlGYSIsInN1YiI6InVscXptLnNlcnZpY2VhY2NvdW50QG5lZnMiLCJpYXQiOjE2NTU1MzU1NTgsImV4cCI6MTY1NTUzOTE1OH0.E4NtnSdz5YzAbVPHdlHSDQH6gKmUik2fvh5uATCc-LU'
  useEffect(()=> {
    fetch('https://auth.worksmobile.com/oauth2/v2.0/token', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: JSON.stringify({
        assertion: assertion,
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        client_id: '2AWwcRxu6VysSoVjnyFa',
        client_secret: 'Paz91GLyKj',
        scope: 'bot'
      }) 
    })
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
      </header>
    </div>
  );
}

export default App;
