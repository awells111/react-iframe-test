import logo from './logo.svg';
import './App.css';
import Iframe from './Iframe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {process.env.REACT_APP_LABEL && <h2>{process.env.REACT_APP_LABEL}</h2>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        {/* Show iframe if the IFRAME_URL isn't undefined */}
        {process.env.REACT_APP_IFRAME_URL && <Iframe IFRAME_URL={process.env.REACT_APP_IFRAME_URL}/>}
      </header>
    </div>
  );
}

export default App;
