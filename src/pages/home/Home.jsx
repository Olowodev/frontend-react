import React from 'react'
import Notification from '../../components/notification/Notification'
import Navbar from '../../components/navbar/Navbar'
import Latestproducts from '../../components/latestProducts/LatestProducts'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='homeContainer'>
        <Notification />
        <Navbar />
        <Latestproducts />
        <Footer />
    </div>
  )
}

export default Home