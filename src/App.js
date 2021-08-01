import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div class="topnav" id="myTopnav">
      <a href="#home" class="active">Home</a>
      <a href="#publications">Publications</a>
      <a href="#CV">CV</a>
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
    </div>
  );
}

/*
function App() {
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
*/


/*
function App() {
  return (
    <div classname="topnav" id="myTopnav">
      <a href="#home" class="active">Home</a>
      <a href="#publications">Publications</a>
      <a href="#CV">CV</a>
    </div>
  );
}
*/

export default App;
