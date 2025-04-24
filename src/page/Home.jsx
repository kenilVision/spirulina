import React , {useState ,useEffect} from 'react'
import Carousel from '../component/home/Carousel'
import ShopByCategories from '../component/home/ShopByCategories'
import SummerWellnessCombos from '../component/home/SummerWellnessCombos'
import Balance from '../component/home/Balance'
import WhyChooseSpiruSwastha from '../component/home/WhyChooseSpiruSwastha'
import Bestsellers from '../component/home/Bestsellers'
import SpiruswasthaTrends from '../component/home/SpiruswasthaTrends'
import "react-toastify/dist/ReactToastify.css";
import Blog from '../component/home/Blog'
function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000) // simulate loading time

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
             <img 
                src="https://spiruswastha.com/cdn/shop/t/25/assets/t4s_loader.svg?v=145003788389301961301736154755" 
                alt="Loading..." 
                className="w-16 h-16"
              />
      </div>
    )
  }

  return (
    <>
      <Carousel />
      <ShopByCategories />
      <SummerWellnessCombos />
      <SpiruswasthaTrends />
      <Balance />
      <Bestsellers />
      <WhyChooseSpiruSwastha /> 
      <Blog />
    </>
  )
}

export default Home
