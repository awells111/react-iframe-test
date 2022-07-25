import logo from './logo.svg';
import './App.css';
import NumberInput from './NumberInput'

function AppSameOrigin(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>"Same Origin Iframe"</h2>
        <img src={logo} className="App-logo" alt="logo" />
      
        <NumberInput defaultValue={6}/>
        <br/>
      </header>
    </div>
  );
}

export default AppSameOrigin;
