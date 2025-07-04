// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
// import {Greet} from './components/greet'; 
// import Greet from './components/greet'; 
 import Welcome from './components/welcome';
// import Hello from './components/hello';


function App() {
  return (
    <div className="App">
      
      {/* component  */}
      {/* <Greet /> */}

      {/* class component  */}
      {/* <Welcome /> */}


      {/* react component  */}
      {/* <Hello />
      <Hello /> */}

        < Greet name ="Hello Anik" heroname="Batman"> <p>This is a children </p>   </Greet>
         <Greet name ="Hello habib" heroname="Superman"> <button>Click Me</button> </Greet>
          <Greet name ="Hello Anika" heroname="Wonder Woman"/> 


          <Welcome name ="Hello Anik" heroname="Batman" />
          <Welcome name ="Hello habib" heroname="Superman" />
          <Welcome  name ="Hello Anika" heroname="Wonder Woman"/>

    </div>
  );
}

export default App;
