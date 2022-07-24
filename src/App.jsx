import logo from './logo.svg';
import './App.css';
import Iframe from './Iframe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Show iframe if the IFRAME_URL isn't undefined */}
        {process.env.REACT_APP_IFRAME_URL && <Iframe IFRAME_URL={process.env.REACT_APP_IFRAME_URL}/>}
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
