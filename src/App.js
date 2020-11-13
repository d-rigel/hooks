
//useCallback hook --use for optimization
/*
import React from "react";
import "./App.css";
import ParentComponent from "./useCallbackHook/ParentComponent"

function App() {
  return(
    <div className="App-header">
      <ParentComponent />
    </div>
  )
}

export default App
*/


/*
//practiceFile
import React, { useState } from "react";
import "./App.css";
import Button from "./practiceFile/Button";
import Count from "./practiceFile/Count";
import Title from "./practiceFile/Title"

function App() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  function incrementAge() {
    setAge(age + 1)
  }     
    
  function incrementSalary() {
    setSalary(salary + 1000)
  }

  return(
    <div className="App-header">
      <Title />
      <Count text="Age" count={age} />
      <Button incrementCount={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button incrementCount={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default App



/*
//Data fetching with useReducer and useEffect
import React from "react";
import "./App.css"
//import DataFetchingOne from "./DatafetchingWithuseReducer/DataFetchingOne";
import DataFetchingTwo from "./DatafetchingWithuseReducer/DataFetchingTwo";

function App() {
  return(
    <div className="App-header">
    {/*  <DataFetchingOne />*///}
  //  <DataFetchingTwo />
 //   </div>
//  )
//}

//export default App
//*/


//useReducer and useContext // my practice
import React, { useReducer } from "react";
import "./App.css";
import ComponentA from "./useReducer_n_useContext/ComponentA";
import ComponentB from "./useReducer_n_useContext/ComponentB";
import ComponentC from "./useReducer_n_useContext/ComponentC";

export const counterContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {
  switch(action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return initialState
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <counterContext.Provider value={{counterValue: count, counterDispatch: dispatch}}>
    <div className="App-header">
      count = {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </counterContext.Provider>
  )
}

export default App


/*
//useContext and useReducer
import React from "react";
import { useReducer } from "react";
import "./App.css"
import ComponentA from "./useReducer_n_useContext/ComponentA";
import ComponentB from "./useReducer_n_useContext/ComponentB";
import ComponentC from "./useReducer_n_useContext/ComponentC";

export const countContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {
    switch(action) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      case "reset":
        return initialState
      default:
        return state

    }
}

function App() {

 const [count, dispatch] = useReducer(reducer, initialState)
  return(
    <countContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App-header">
      Count = {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </countContext.Provider>
  )
}

export default App
*/

/*
//useReducer
import React from "react"
import "./App.css"
import CounterThree from "./useReducer/CounterThree"
//import CounterOne from "./useReducer/CounterOne"
//import CounterTwo from "./useReducer/CounterTwo"

function App() { 
  return(
    <div className="App-header">
   { /* <CounterOne  />*/
 //   {/*  <CounterTwo />*/}
  //  <CounterThree />
  //  </div>
//  )
//}


//export default App
//*/



/*
//react useContext with multiple consumer
import "./App.css";
import ComponentA from "./reactContextMultipleConsumer/ComponentA";

export const userContext = createContext()
export const BiContext = createContext()


function App() {
  return(
    <div className="App-header">
      <BiContext.Provider value={"D-rigel"}>
      <userContext.Provider value={"Emmanuel"}>
      <ComponentA />
      </userContext.Provider>
      </BiContext.Provider>
     
    </div>
  )
}

export default App
*/


/*
import "./App.css";
import ComponentA from "./reactContextMultipleConsumer/ComponentA";

//useReducer is a hook for used for state management in react
//useReducer is related to reducer function
//useReducer(reducer, initialState)
//reducer(currentState, action)
export const userContext = createContext()
export const channelContext = createContext()

function App() {
  return(
    <div className="App-header">
      <channelContext.Provider value={"is a fucking country"}>
      <userContext.Provider value={"Nigeria"}>
      <ComponentA />
      </userContext.Provider>
      </channelContext.Provider>
      
    </div>
  )
}

export default App
*/
/*
//reactContextMultipleConsumer
import React, { createContext } from 'react';
import "./App.css";
import ComponentA from "./reactContextMultipleConsumer/ComponentA";

export const userContext = createContext()
export const channelContext = createContext()

function App() {
  return (
    <div className="App-header">
      <channelContext.Provider value={"D-rigel"}>
      <userContext.Provider value={"Emmanuel"}>
      <ComponentA />
      </userContext.Provider>
      </channelContext.Provider>
     
    </div>
  )
}

export default App
*/

/*
//reactContextSingleConsumer
import "./App.css"
import ComponentA from "./reactContextSingleConsumer/ComponentA"

export const userContext = React.createContext()

function App() {
  return(
    <div className="App-header">
      <userContext.Provider value={"Nnadozie"}>
         <ComponentA />
      </userContext.Provider>
     
    </div>
  )
}

export default App
*/

/*
//react context normal props passing
import React from "react";
import "./App.css"
import Toolbar from "./Toolbar"

const ThemeContext = React.createContext("light")

class App extends React.Component{
  render() {
    return(
      <div className="App-header">
        <ThemeContext.Provider value="dark">
        <Toolbar />
        </ThemeContext.Provider>
       
      </div>
    )
  }
}  

export default App
*/

/*
//normalProp
import React from 'react';
import './App.css';
import Toolbar from './normalProp/Toolbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Toolbar theme="dark" />
      </header>
    </div>
  );
}

export default App;
*/