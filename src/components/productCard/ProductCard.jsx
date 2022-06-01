import './ProductCard.css'
import React from 'react';
import { FaHeart} from 'react-icons/fa'

const Productcard = ({product}) => {
    return (
        <div className='productcard'>
            <div className='productTop'>
                <img src={product.img} />
            </div>
            <div className='productBottom'>
                <div className='productBottomLeft'>
                    <p>{product.title}</p>
                    <p>Pricing   {product.price}</p>
                </div>
                <div className='productBottomRight'>
                    <FaHeart  />
                </div>
            </div>
        </div>
    );
}

export default Productcard;