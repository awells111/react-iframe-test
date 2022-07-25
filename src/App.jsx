import logo from './logo.svg';
import './App.css';
import Iframe from './Iframe';
import NumberInput from './NumberInput'
import IframeSameOrigin from './IframeSameOrigin'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {process.env.REACT_APP_LABEL && <h2>{process.env.REACT_APP_LABEL}</h2>}
        <img src={logo} className="App-logo" alt="logo" />
      
        <NumberInput defaultValue={5}/>
        <br/>
        {
          /* Show iframe if the IFRAME_URL isn't undefined */
          process.env.REACT_APP_IFRAME_URL && <Iframe IFRAME_URL={process.env.REACT_APP_IFRAME_URL}/>
        }

        {
          process.env.REACT_APP_NEST_SELF && <IframeSameOrigin hasIframe={false}/>
        }

      </header>
    </div>
  );
}

export default App;
