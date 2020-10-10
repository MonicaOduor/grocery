import React from 'react'
import logo from '../logo.png';
import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <Link to='/'style={{color: 'black'}} >
        <div className="logo text-center"style={{cursor: 'pointer'}}>
            <header className="App-header">
                <img src={logo} className="logo-img" alt="logo" />
                <p className='logo  '>GOSHEN<br /> GROCERIES</p>
            </header>
        </div>
        </Link>
    )
}
