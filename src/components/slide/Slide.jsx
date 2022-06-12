import React from 'react'
import './Slide.css'
import decal1 from '../../images/decal1.png'
import decal4 from '../../images/decal4.png'
import decal5 from '../../images/decal5.png'

const Slide = () => {
  return (
    <div className='slide'>
        <div className='slideTexts'>
            <h1>GET CREATIVE AND</h1>
            <h1>DECORATIVE VINYL AND</h1>
            <h1>DECAL STICKERS</h1>
        </div>
        <div className='slideButton'>SELECT YOUR CHOICE</div>
        <div className='slideImg img1'>
            <img src={decal1} />
        </div>
        <div className='slideImg img2'>
            <img src={decal4} />
        </div>
        <div className='slideImg img3'>
            <img src={decal5} />
        </div>
    </div>
  )
}

export default Slide