import React, {useContext} from 'react'
import { counterContext } from "../App"


function ComponentF() {

    const counterContexts = useContext(counterContext)
    return (
        <div>
            Component F -- {counterContexts.counterValue}
            <div>
            <button onClick={() => {counterContexts.counterDispatch("increment")}}>Increment</button>
            <button onClick={() => {counterContexts.counterDispatch("decrement")}}>Decrement</button>
            <button onClick={() => {counterContexts.counterDispatch("reset")}}>Reset</button>
            </div>
            
        </div>
    )
}

export default ComponentF


/*
import React, { useContext } from 'react'
import { countContext } from "../App"

function ComponentF() {
    const countContexts = useContext(countContext)
    return (
        <div>
            Component F {countContexts.countState}
            <div>
                <button onClick={() => {countContexts.countDispatch("increment")}}>Increment</button>
                <button onClick={() => {countContexts.countDispatch("decrement")}}>decrement</button>
                <button onClick={() => {countContexts.countDispatch("reset")}}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentF
*/