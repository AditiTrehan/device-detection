import logo from './logo.svg';
import './App.css';
import {isTablet,osVersion,mobileVendor,mobileModel,deviceType,getUA,engineVersion,browserVersion,fullBrowserVersion} from 'react-device-detect';

function App() {
  console.log(isTablet,osVersion,mobileVendor,mobileModel,deviceType,"isMobile")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <p>isTablet <code>{isTablet}</code></p> 
          <p>osVersion <code>{osVersion}</code></p>
          <p>mobileVendor <code>{mobileVendor}</code></p>
          <p>mobileModel <code>{mobileModel}</code></p>
          <p>deviceType <code>{deviceType}</code></p>
          <p>getUA <code>{getUA}</code></p>
          <p>engineVersion <code>{engineVersion}</code></p>
          <p>browserVersion <code>{browserVersion}</code></p>
          <p>fullBrowserVersion <code>{fullBrowserVersion}</code></p>
      </header>
    </div>
  );
}

export default App;
