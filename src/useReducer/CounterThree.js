import React, { useReducer } from "react"

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

function CounterThree() {

  const [counter, dispatch] = useReducer(reducer, initialState)
  const [CounterThree, dispatchThree] = useReducer(reducer, initialState)
    return(
        <div>
            <div>
                 <div>CounterA = {counter}</div>
                <button onClick={() => {dispatch("increment")}}>Increment</button>
                <button onClick={() => {dispatch("decrement")}}>Decrement</button>
                <button onClick={() => {dispatch("reset")}}>Reset</button>
            </div>
            <div>
            <div>CounterB = {CounterThree}</div>
                <button onClick={() => {dispatchThree("increment")}}>Increment</button>
                <button onClick={() => {dispatchThree("decrement")}}>Decrement</button>
                <button onClick={() => {dispatchThree("reset")}}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree
/*
//multiple useReducers
//NB: when dealing with multiple state variables that have the same state transitions 
// it is a good idea to have multiple useReducers making use of the same reducer function
//this will awarding the complexity of merging the state if it were to be an object
// and also prevent us from duplicating code in the reducer function

import React, { useReducer } from "react"

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


function CounterThree(){

 const [counter, dispatch] = useReducer(reducer, initialState)
 const [counterTwo, dispatchTwo] = useReducer(reducer, initialState)

    return(
        <div>
            <div>
            <div>counter = {counter}</div>
            <button onClick={() => {dispatch("increment")}}>Increment</button>
            <button onClick={() => {dispatch("decrement")}}>Decrement</button>
            <button onClick={() => {dispatch("reset")}}>Reset</button>
            </div>
            <div>
            <div>counterTwo = {counterTwo}</div>
            <button onClick={() => {dispatchTwo("increment")}}>Increment</button>
            <button onClick={() => {dispatchTwo("decrement")}}>Decrement</button>
            <button onClick={() => {dispatchTwo("reset")}}>Reset</button>
            </div>
            
        </div>
    )
}

export default CounterThree
*/