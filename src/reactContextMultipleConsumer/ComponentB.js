import React, { useContext } from "react"
import { userContext, BiContext } from "../App"



function ComponentB(){
    const user = useContext(userContext)
const Bi = useContext(BiContext)
    return(
    <div>
       {
         <>
           <span>user: {user}</span> <br />
          <span>Bichannel: {Bi}</span>
       </>
       }
       
    </div>
    )
}

export default ComponentB

/*
import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext, channelContext } from "../App"

function ComponentB() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
    return(
        <div>
            {
                <>
                <span>user: {user}</span> <br/>
                <span>channel: {channel}</span>
                </>
            }
        </div>
    )
}

export default ComponentB
*/
/*
import React, { useContext } from 'react'
import { userContext, channelContext } from "../App"


function ComponentB() {
    const user = useContext(userContext)
    const channel = useContext(channelContext)

    return (
        <div>
            {
            <>
             <h3>user: {user}</h3>
             <h3>channel: {channel}</h3>
             </>
             
            }
        </div>
    )
}

export default ComponentB
*/