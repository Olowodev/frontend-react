import React from 'react'
import { BsBag } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import decal1 from '../../images/decal1.png'
import './MainProductCard.css'

const MainProductCard = ({product}) => {
  return (
    <div className='mainCard'>
        <div className='mainImg'>
            <img src={product.img} />
        </div>
        <div className='mainDesc'>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
        <div className='mainButtons'>
            <div className='mainBuyButton'>
                <BsBag />
                <p>Add to Bag</p>
            </div>
            <div className='mainLikeButton'>
                <FaRegHeart />
            </div>
        </div>
    </div>
  )
}

export default MainProductCard