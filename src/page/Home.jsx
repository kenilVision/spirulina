import React from 'react'
import Carousel from '../component/home/Carousel'
import ShopByCategories from '../component/home/ShopByCategories'
import SummerWellnessCombos from '../component/home/SummerWellnessCombos'
import Balance from '../component/home/Balance'
import WhyChoosеSpiruSwastha from '../component/home/WhyChoosеSpiruSwastha'
import Bestsellers from '../component/home/Bestsellers'
import SpiruswasthaTrends from '../component/home/SpiruswasthaTrends'

function Home() {
  return (
    <div>
      <Carousel />
      <ShopByCategories />
      <SummerWellnessCombos />
      <SpiruswasthaTrends />
      <Balance />
      <Bestsellers />
      <WhyChoosеSpiruSwastha /> 
    </div>
  )
}

export default Home
