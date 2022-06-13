import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import decal1 from '../../images/decal1.png'
import decal3 from '../../images/decal3.png'
import decal4 from '../../images/decal4.png'
import decal5 from '../../images/decal5.png'
import './SingleProduct.css'


const SingleProduct = () => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <img src={decal1} />
                </div>
                <div>
                    <img src={decal3} />
                </div>
                <div>
                    <img src={decal4} />
                </div>
                <div>
                    <img src={decal5} />
                </div>
            </div>
            <div>
                <h1>Rainbow Elephant Sticker</h1>
                <div>
                    <img src={decal1} />
                </div>
            </div>
        </div>
        <div>
            <h1>$70.99</h1>
            <div></div>
            <p>Aviyl decal sticker to beautify any of your appliances or products</p>
            <div></div>
            <div>
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
                <div>
                    <p>Add to Bag</p>
                </div>
            </div>
            <div></div>
            <div>
                <FaRegHeart />
                <p>Add to Your Wishlist</p>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct