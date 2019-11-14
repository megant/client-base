import React from 'react'

const TopmenuItem = ({linkTo, text}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={linkTo}>{text}</a>                    
        </li>
    )
}

export default TopmenuItem