import React from 'react'
import { FaSearch } from 'react-icons/fa'
import MainProductCard from '../mainProductCard/MainProductCard'
import { AllProducts } from '../../data'
import './ProductList.css'

const ProductList = () => {
  return (
    <div className='productlist'>
      <div className='topProductList'>
        <div className='searchBox'>
          <FaSearch style={{ alignSelf: 'center', color: '#b1b1b1'}} />
          <input />
        </div>
        <div className='sortDropdown'>
          <label>Sort by</label>
          <select>
            <option>Relevance</option>
            <option>Price: Low - High</option>
            <option>Price: High - Low</option>
          </select>
        </div>
      </div>
      <p className='productNum'>{AllProducts.length} products</p>
      <div className='mainproductlist'>
        {AllProducts.map((product, index)=>(
          <MainProductCard product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList