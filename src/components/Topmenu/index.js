import React from 'react'

const Topmenu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
            </div>
        </nav>
    )
}

export default Topmenu