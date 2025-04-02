import React from 'react';
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

  return (
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
        {backgroundImages.map((image, index) => (
          <div key={index} className="slider-custom">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full  object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
