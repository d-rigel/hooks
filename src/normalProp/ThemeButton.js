import React, { Component } from "react"

class ThemeButton extends Component {
    render() {
        return (
            <div>
                <button>{this.props.newTheme}</button>
            </div>
        )
    }
}

export default ThemeButton