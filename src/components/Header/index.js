import React from 'react'
import Topmenu from "../Topmenu"
import TopmenuItem from '../TopmenuItem'

const Header = () => {
    return ( 
        <header>
            <Topmenu>
                <TopmenuItem linkTo="#" text="Menu 1" />
                <TopmenuItem linkTo="#" text="Menu 2" />
                <TopmenuItem linkTo="#" text="Menu 3" />
            </Topmenu>
        </header>    
    )
}

export default Header