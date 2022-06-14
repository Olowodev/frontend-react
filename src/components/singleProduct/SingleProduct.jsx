import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import decal1 from '../../images/decal1.png'
import decal3 from '../../images/decal3.png'
import decal4 from '../../images/decal4.png'
import decal5 from '../../images/decal5.png'
import './SingleProduct.css'


const SingleProduct = () => {
  return (
    <div className='singleProduct'>
        <div className='singleLeft'>
            <div className='mainPic'>
                <h1>Rainbow Elephant Sticker</h1>
                <div>
                    <img src={decal1} />
                </div>
            </div>
        </div>
        <div className='singleRight'>
            <h1>$70.99</h1>
            <div className='hline2'></div>
            <ul>
                <li>Vinyl decal sticker to beautify any of your appliances or products</li>
                <li>Vinyl decal sticker to beautify any of your appliances or products</li>
                <li>Vinyl decal sticker to beautify any of your appliances or products</li>
                <li>Vinyl decal sticker to beautify any of your appliances or products</li>
            </ul>
            <div className='hline2'></div>
            <div className='purchase'>
                <div className='select-wrapper'>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                </div>
                <div className='purchaseButton'>
                    <p>Add to Bag</p>
                </div>
            </div>
            <div className='hline2'></div>
            <div className='wishlist'>
                <FaRegHeart style={{color : '#d42114', fontSize: '24px'}} />
                <p>Add to Your Wishlist</p>
            </div>
            <div className='hline2'></div>
        </div>
    </div>
  )
}

export default SingleProduct