// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
// import {Greet} from './components/greet'; 
// import Greet from './components/greet'; 
 import Welcome from './components/welcome';
// import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import Gre from './components/gre';
import Gr from './components/gr';
import DestucturePropsClassCompoonent from './components/destucturePropsClassCompoonent';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import UserGreetingUsingVar from './components/UserGreetingUsingVar';
import NameList from './components/NameList';
import Person from './components/Person';
import Stylesheet from './components/Stylesheet';




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

          <Message />
          <Counter />
          <Gre name="Anik" heroname="AntMan"/>
          <Gr name="Habib" heroname="Hulk"/>
          <DestucturePropsClassCompoonent name="Anik" />


          <FunctionClick/>
          <ClassClick/>
          <EventBind/>
          <ParentComponent/>
          <UserGreeting/>
          <UserGreetingUsingVar/>
          <NameList/>
          <Person/>

          <Stylesheet/>
        

    </div>
  );
}

export default App;
