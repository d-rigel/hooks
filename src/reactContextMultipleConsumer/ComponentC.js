import React from "react"
import { userContext } from "../App"


function ComponentC(){
    return(
    <div>
        <userContext.Consumer>
    {
        user => {
        return <h3>name: {user}</h3>
        }

    }
    </userContext.Consumer>
    </div>
    )
}

export default ComponentC


/*
import React from "react";
import { userContext } from "../App"

function ComponentC() {
    return(
        <div>
            <userContext.Consumer>
            {
                user => {
                return <h3>user: <span style={{color: "red"}}>{user}</span> </h3>
                }
            }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC
*/
/*
import React from 'react'
import { userContext } from "../App"

function ComponentC() {
    return (
        <div>
            <userContext.Consumer>
            {
                user => {
                return <h3>my name is {user}</h3>
                }
            }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC
*/