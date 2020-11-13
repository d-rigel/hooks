import React, { useReducer } from "react"

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {...state, firstCounter: state.firstCounter + action.value}
        case "decrement": 
            return {...state, firstCounter: state.firstCounter - action.value}
       case "increment2":
                return {...state, secondCounter: state.secondCounter + action.value}
       case "decrement2": 
                return {...state, secondCounter: state.secondCounter - action.value}
        case "reset": 
            return initialState
        default: 
        return state
    }
}
function CounterTwo() {

   const [counter, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <div>counter = {counter.firstCounter}</div>
            <div>counter = {counter.secondCounter}</div>

            <button onClick={() => {dispatch({type: "increment", value: 1})}}>Increment by 1</button>
            <button onClick={() => {dispatch({type: "decrement", value: 1})}}>Decrement by 1</button>
            <div>
            <button onClick={() => {dispatch({type: "increment", value: 5})}}>Increment by 5</button>
            <button onClick={() => {dispatch({type: "decrement", value: 5})}}>Decrement by 5</button>
            </div>
            <div>
            <button onClick={() => {dispatch({type: "increment2", value: 1})}}>Increment </button>
            <button onClick={() => {dispatch({type: "decrement2", value: 1})}}>Decrement </button>
            </div>
            <button onClick={() => {dispatch({type: "reset"})}}>Reset</button>
            
        </div>
    )
}

export default CounterTwo


/*
//useReducer complex action and as object
import React, { useReducer } from "react"

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {...state, firstCounter: state.firstCounter + action.value}
        case "decrement":
            return {...state, firstCounter: state.firstCounter - action.value}
         case "increment2":
             return {...state, secondCounter: state.secondCounter + action.value}
        case "decrement2":
             return {...state, secondCounter: state.secondCounter - action.value}
        case "reset":
             return initialState
        default:
            return state
    }
}

function CounterTwo() {

 const [counter, dispatch] =   useReducer(reducer, initialState)

    return (
        <div>
            <div>first counter = {counter.firstCounter}</div>
            <div>second counter = {counter.secondCounter}</div>
            <button onClick={() => {dispatch({type: "increment", value: 1})}} >Increment</button>
            <button onClick={() => {dispatch({type: "decrement", value: 1})}}>Decrement</button>
            
            <div>
            <button onClick={() => {dispatch({type: "increment", value: 5})}} >Increment by 5</button>
            <button onClick={() => {dispatch({type: "decrement", value: 5})}}>Decrement by 5</button>
            
            </div>

            <div>
            <button onClick={() => {dispatch({type: "increment2", value: 5})}} >Increment counter 2</button>
            <button onClick={() => {dispatch({type: "decrement2", value: 5})}}>Decrement counter 2</button>
            <div>
            <button onClick={() => {dispatch({type: "reset"})}}>Reset</button>
            </div>
           
            </div>
            
        </div>
    )
}

export default CounterTwo
*/