import {Link} from 'react-router-dom'
import './Navbar.css'
import React from 'react'
import { BsBag, BsPerson } from 'react-icons/bs'
import { FaChevronDown} from 'react-icons/fa'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} />
                </div>
                <div className='links'>
                    <Link to='/'>
                        <p>HOME</p>
                    </Link>
                    <Link to='/stickers'>
                        <p>PRODUCTS</p>
                    </Link> 
                    <Link to='/custom-services'>
                        <div className='navDropdown'>
                            <p>CUSTOM SERVICES</p>
                            <FaChevronDown />
                        </div>
                    </Link>   
                    <Link to='/support'>
                        <p>SUPPORT</p>
                    </Link>
                </div>
                <div className='navRight'>
                    <div className='navIcon'>
                        <BsBag style={{fontSize:30}} />
                    </div>
                    <div className='navIcon'>
                        <BsPerson style={{fontSize:30}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;