import React from 'react'
import FeatureProducts from '../../components/featuredProducts/FeatureProducts'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Notification from '../../components/notification/Notification'
import SingleProduct from '../../components/singleProduct/SingleProduct'

const SinglePage = () => {
  return (
    <div className='singlePage'>
        <Notification />
        <Navbar />
        <SingleProduct />
        <FeatureProducts />
        <Footer />
    </div>
  )
}

export default SinglePage