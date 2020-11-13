import React from 'react'

function Title() {
    console.log("Rendering Title")
    return (
        <h3>
            Use callBack hook
        </h3>
    )
}

export default React.memo(Title)
