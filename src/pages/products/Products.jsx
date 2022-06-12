import React from 'react'
import Notification from '../../components/notification/Notification'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Filter from '../../components/filter/Filter'
import ProductList from '../../components/productList/ProductList'
import './Products.css'


const Products = () => {
  return (
    <div>
        <Notification />
        <Navbar />
        <div className='flexProduct'>
          <Filter />
          <ProductList />
        </div>
        <Footer />
    </div>
  )
}

export default Products