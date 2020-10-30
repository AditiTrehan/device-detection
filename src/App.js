import logo from './logo.svg';
import './App.css';
import {isTablet,osVersion,mobileVendor,mobileModel,deviceType,
  getUA,engineVersion,browserVersion,fullBrowserVersion,osName} from 'react-device-detect';
import uniqid from 'uniqid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <p>isTablet- <code>{isTablet ? "true": "false"}</code></p> 
          <p>osVersion- <code>{osVersion}</code></p>
          <p>brand- <code>{mobileVendor}</code></p>
          <p>deviceName- <code>{mobileModel}</code></p>
          <p>deviceType- <code>{deviceType}</code></p>
          <p>userAgent- <code>{getUA}</code></p>
          <p>systemName- <code>{osName}</code></p>
          <p>engineVersion- <code>{engineVersion}</code></p>
          <p>browserVersion- <code>{browserVersion}</code></p>
          <p>fullBrowserVersion- <code>{fullBrowserVersion}</code></p>
          <p>uniqueId-<code>{uniqid()}</code></p> 
      </header>
    </div>
  );
}

export default App;
