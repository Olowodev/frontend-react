import './Footer.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { FaInstagram, FaFacebook, FaChevronCircleRight } from 'react-icons/fa'
import masterCard from '../../images/mastercard.png'
import visa from '../../images/visa.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footcontainer'>
                <div className='leftfoot'>
                    <h1>GET UPDATES ON</h1>
                     <h1 className='shift'>MORE CREATIVE AND</h1>
                      <h1>EXPRESSING DECALS</h1>
                    <div className='input'>
                        <input type='text' placeholder='Email address' />
                        <FaChevronCircleRight style={{fontSize:24}} />
                    </div>
                    <div className='payment'>
                        <div>
                            <img src={masterCard} />
                        </div>
                        <div>
                            <img src={visa} />
                        </div>
                    </div>
                </div>
                <div className='rightfoot'>
                    <h1>Support</h1>
                    <div className='footlinks'>
                        <Link to='/terms-conditions'>
                            <p>Terms &#38; Conditions</p>
                        </Link>
                        <Link to='/privacy-policy'>
                            <p>Privacy Policy</p>
                        </Link>
                        <Link to='/contact'>
                            <p>Contact</p>
                        </Link>
                        <Link to='/login'>
                            <p>Login</p>
                        </Link>
                    </div>
                    <div className='socials'>
                        <div>
                            <FaInstagram style={{fontSize:22}} />
                        </div>
                        <div>
                            <FaFacebook style={{fontSize:22}}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;