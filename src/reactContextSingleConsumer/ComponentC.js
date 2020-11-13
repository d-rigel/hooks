import React from 'react'
import { userContext } from "../App"

function ComponentC() {
    return (
        <div>
            <userContext.Consumer>
            {
                user => {
                return <div>User context value {user}</div>
                }
            }
          </userContext.Consumer>          
            
        </div>
    )
}

export default ComponentC
