import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <div className="section-padding">
            <nav>
                <div className='logo'>Ikkyu Restaurant</div>

                <ul className='nav-area'>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar