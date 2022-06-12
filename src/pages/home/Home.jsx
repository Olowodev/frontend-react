import React from 'react'
import Notification from '../../components/notification/Notification'
import Navbar from '../../components/navbar/Navbar'
import Latestproducts from '../../components/latestProducts/LatestProducts'
import Footer from '../../components/footer/Footer'
import SlideShow from '../../components/slideShow/SlideShow'

const Home = () => {
  return (
    <div className='homeContainer'>
        <Notification />
        <Navbar />
        <SlideShow />
        <Latestproducts />
        <Footer />
    </div>
  )
}

export default Home