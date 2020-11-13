import React, {useContext} from 'react'
import { counterContext } from "../App"


function ComponentA() {

    const counterContexts = useContext(counterContext)
    return (
        <div>
            Component A -- {counterContexts.counterValue}
            <div>
            <button onClick={() => {counterContexts.counterDispatch("increment")}}>Increment</button>
            <button onClick={() => {counterContexts.counterDispatch("decrement")}}>Decrement</button>
            <button onClick={() => {counterContexts.counterDispatch("reset")}}>Reset</button>
            </div>
            
        </div>
    )
}

export default ComponentA


/*
import React, { useContext } from 'react'
import { countContext } from "../App"

function ComponentA() {
    const countContexts = useContext(countContext)
    return (
        <div>
            Component A {countContexts.countState}
            <div>
                <button onClick={() => {countContexts.countDispatch("increment")}}>Increment</button>
                <button onClick={() => {countContexts.countDispatch("decrement")}}>decrement</button>
                <button onClick={() => {countContexts.countDispatch("reset")}}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentA
*/