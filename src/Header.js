import React from 'react'
import './Header.css'
import app from './firebase'




function Header({user}) {

    return (
        <div className="header">
            {/* Logo */}
            <h3>Raggle</h3>
            <div className="header__profile">
            <h4 onClick={() => app.auth().signOut()} className="header__email">{user.email}</h4>
            </div>
            {/* icon and name when logged in */}
        </div>
    )
}

export default Header
