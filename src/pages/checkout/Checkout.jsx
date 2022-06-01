import React from 'react'
import { BsBag } from 'react-icons/bs'
import decal from '../../images/decal3.png'

const Checkout = () => {
  return (
    <div>
        <div>
            <table>
                <thead>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>TOTAL</th>
                </thead>
                <tbody>
                    <td>
                        <div>
                            <img src={decal} />
                            <p></p>
                            <p></p>
                        </div>
                    </td>
                    <td>
                        <p>$99.99</p>
                    </td>
                    <td>
                        <div>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                    </td>
                    <td>
                        <p>$99.99</p>
                    </td>
                </tbody>
            </table>
        </div>
        <div>
            <div></div>
            <div>
                <div>
                    <div>
                        <p>CART TOTAL</p>
                        <p>$189.90</p>
                    </div>
                </div>
                <div>
                    <input />
                    <p>I agree to <span>Terms and Conditions</span></p>
                </div>
                <div>
                    <p></p>
                    <BsBag />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout