import React from "react"
import ThemeButton from "./ThemeButton"

function Toolbar(props) {
    return (
        <div>
            <ThemeButton newTheme={props.theme} />
        </div>
    )
}

export default Toolbar