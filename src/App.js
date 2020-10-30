import logo from './logo.svg';
import './App.css';
import {isTablet,osVersion,mobileVendor,mobileModel,deviceType,
  getUA,engineVersion,browserVersion,fullBrowserVersion,osName} from 'react-device-detect';
import uniqid from 'uniqid';

let is24Hour;
function App() {
  var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
    var dateString = date.toLocaleTimeString();

   console.log(dateString,"dateString")
    if (dateString.match(/am|pm/i) || date.toString().match(/am|pm/i) )
    {
        //12 hour clock
       is24Hour = false
    }
    else
    {
        //24 hour clock
       is24Hour = true
    }
    console.log(is24Hour)
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
          <p>is24Hour-<code>{is24Hour ? "true" : "false"}</code></p>
      </header>
    </div>
  );
}

export default App;
