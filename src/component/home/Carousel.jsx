import React,{useState , useEffect} from 'react';
import "./Carousel.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/home_banner_destop_3.jpg';
import image2 from '../../assets/New_Product_Lunach_1.jpg';
import image3 from '../../assets/new_year_slide_3.jpg';
import image4 from '../../assets/Slider_4_1.jpg';
import image5 from '../../assets/summer_1.jpg';



function ImageCarousel() {
  const backgroundImages = [image1, image2, image3, image4, image5];
  const link = [
      "https://spiruswastha.com/cdn/shop/files/new_year_slide_3_mobile.jpg?format=pjpg&v=1735303324&width=1100",
      "https://spiruswastha.com/cdn/shop/files/home_banner_mobile_3.jpg?format=pjpg&v=1735100911&width=1100",
      "https://spiruswastha.com/cdn/shop/files/summer_Mobile_1.jpg?format=pjpg&v=1740375894&width=1100",
      "https://spiruswastha.com/cdn/shop/files/new_product_1.jpg?format=pjpg&v=1741770936&width=1100",
      "https://spiruswastha.com/cdn/shop/files/Holi_Mobile_1.jpg?format=pjpg&v=1741869576&width=1100",
      "https://spiruswastha.com/cdn/shop/files/4_2.jpg?format=pjpg&v=1739766310&width=1100"
  ]

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    
    useEffect(() => {

      
      const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>

    <div className="relative w-full  ">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={7000}
        swipeable={true}
        emulateTouch={true}
      >
        {(isLargeScreen ? backgroundImages : link).map((image, index) => (
          <div key={index} className="slider-custom">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
}

export default ImageCarousel;
