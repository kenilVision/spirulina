import React,{useState , useEffect} from 'react';
import "./Carousel.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from "react-router";
import 'aos/dist/aos.css';


const  ImageCarousel = () => {
  const backgroundImages = [    // Desktop Images
    "https://spiruswastha.com/cdn/shop/files/summer_1.jpg?format=pjpg&v=1740371160&width=2000",
    "https://spiruswastha.com/cdn/shop/files/2_3.jpg?format=pjpg&v=1741770918&width=2000",
    "https://spiruswastha.com/cdn/shop/files/New_Product_Lunach_1.jpg?format=pjpg&v=1741869576&width=2000",
    "https://spiruswastha.com/cdn/shop/files/Slider_4_1.jpg?format=pjpg&v=1739766299&width=2000",
    "https://spiruswastha.com/cdn/shop/files/new_year_slide_3.jpg?format=pjpg&v=1735303282&width=2000",
    "https://spiruswastha.com/cdn/shop/files/home_banner_destop_3.jpg?format=pjpg&v=1735100933&width=2000"
  ];
  const link = [                // Mobile Images
      "https://spiruswastha.com/cdn/shop/files/new_year_slide_3_mobile.jpg?format=pjpg&v=1735303324&width=1100",
      "https://spiruswastha.com/cdn/shop/files/home_banner_mobile_3.jpg?format=pjpg&v=1735100911&width=1100",
      "https://spiruswastha.com/cdn/shop/files/summer_Mobile_1.jpg?format=pjpg&v=1740375894&width=1100",
      "https://spiruswastha.com/cdn/shop/files/new_product_1.jpg?format=pjpg&v=1741770936&width=1100",
      "https://spiruswastha.com/cdn/shop/files/Holi_Mobile_1.jpg?format=pjpg&v=1741869576&width=1100",
      "https://spiruswastha.com/cdn/shop/files/4_2.jpg?format=pjpg&v=1739766310&width=1100"
  ]

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);       // State to track screen size

    
    useEffect(() => {                     // Effect to update screen size on resize
      const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    let navigate = useNavigate();         // Hook to navigate to different routes

  return (
    <>

    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"   className="relative w-full hover:cursor-pointer  ">
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
              className="w-full h-full object-contain"               
              onClick={() => {
                navigate('/Products');
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
}

export default ImageCarousel;
