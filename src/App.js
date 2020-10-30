import logo from './logo.svg';
import './App.css';
import {isTablet,osVersion,mobileVendor,mobileModel,deviceType} from 'react-device-detect';

function App() {
  console.log(isTablet,osVersion,mobileVendor,mobileModel,deviceType,"isMobile")
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
