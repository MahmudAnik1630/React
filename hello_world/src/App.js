import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/greet'; 
import Greet from './components/greet'; 
import Welcome from './components/welcome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello world</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* component  */}
      <Greet />

      {/* class component  */}
      <Welcome />

    </div>
  );
}

export default App;
