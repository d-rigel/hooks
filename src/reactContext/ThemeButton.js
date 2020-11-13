import React, { Component } from "react"
//import { ThemeContext } from "../App"

class ThemeButton extends Component {
    static contextType = ThemeContext
    
    render() {
        return(
            <div>
                <button>{this.context}</button>
            </div>
        )
    }
}

export default ThemeButton

