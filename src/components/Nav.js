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
                <img className="nav_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen7t5RK6gIQYw5dvUaDNWBuikWgo1czzBAQ&usqp=CAU" alt="avatar" />
            </div>
        </div>
    )
}

export default Nav
