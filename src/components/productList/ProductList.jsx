import React from 'react'
import { FaSearch } from 'react-icons/fa'

const ProductList = () => {
  return (
    <div>
      <div>
        <div>
          <FaSearch />
          <input />
        </div>
        <div>
          <label>Sort by</label>
          <select>
            <option>Relevance</option>
            <option>Price: Low - High</option>
            <option>Price: High - Low</option>
          </select>
        </div>
      </div>
      <p></p>
      <div></div>
    </div>
  )
}

export default ProductList