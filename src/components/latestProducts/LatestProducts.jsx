import './LatestProducts.css'
import React from 'react';
import Productcard from '../productCard/ProductCard';
import {Products} from '../../data'
import {FaArrowRight} from 'react-icons/fa'

const Latestproducts = () => {
    return (
        <div className='latest'>
            <div className='latestcontainer'>
                <div className='title'>
                    <h1>Latest Products</h1>
                    <div>
                        <p>See more</p>
                        <FaArrowRight />
                    </div>
                </div>
                <div className='products'>
                    {Products.map((product, index) => (
                        <Productcard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Latestproducts;