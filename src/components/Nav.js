import React, { useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => (window.scrollY > 100) ? handleShow(true) : handleShow(false)

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo" />
                <img className="nav_avatar" src="https://cdn1.iconfinder.com/data/icons/avatars-and-biometry-data/154/add-create-web-avatar-person-data-512.png" alt="avatar" />
            </div>
        </div>
    )
}

export default Nav
