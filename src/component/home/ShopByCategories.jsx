import React , {useEffect} from 'react'
import Section from '../common/Section'
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';
function ShopByCategories() {

    const categories = [
        {
          id: "b_collection_item_KXKTCi",
          name: "Immunity",
          url: "/collections/immunity",
          image: "//spiruswastha.com/cdn/shop/files/Iimmunity.svg?v=1733740496"
        },
        {
          id: "b_collection_item_wHEHQn",
          name: "Skin Care",
          url: "/collections/skin-care",
          image: "//spiruswastha.com/cdn/shop/files/Skin.svg?v=1733740527"
        },
        {
          id: "b_collection_item_6zf9Ec",
          name: "Hair Care",
          url: "/collections/hair-care",
          image: "//spiruswastha.com/cdn/shop/files/Hair.svg?v=1733740556"
        },
        {
          id: "b_collection_item_iVaTYf",
          name: "Heart Care",
          url: "/collections/heart-care",
          image: "//spiruswastha.com/cdn/shop/files/Heart.svg?v=1733740586"
        },
        {
          id: "b_collection_item_dB87Nw",
          name: "Wellness",
          url: "/collections/wellness",
          image: "//spiruswastha.com/cdn/shop/files/Strength.svg?v=1733740610"
        },
        {
          id: "b_collection_item_WRAUiV",
          name: "Cleansing",
          url: "/collections/cleansing",
          image: "//spiruswastha.com/cdn/shop/files/Cleansing.svg?v=1733740640"
        }
      ];

      const navigation = [
        {
          to: '/Immunity',
          text: "Immunity",
          image: "//spiruswastha.com/cdn/shop/files/cleansing_0ea84d00-8cca-4836-ad59-4bd4b897caae_medium.svg?v=1736144560"
      
        },
        {
          to: '/SkinCare',
          text: "Skin Care",
          image: "//spiruswastha.com/cdn/shop/files/skin_care_medium.svg?v=1736144421"
        },
        {
          to: '/HairCare',
          text: "Hair Care",
          image: "//spiruswastha.com/cdn/shop/files/hair_care_medium.svg?v=1736144487"
        },
        {
          to: '/HeartCare',
          text: "Heart Care",
          image: "//spiruswastha.com/cdn/shop/files/heart_care_medium.svg?v=1736144448"
        },
        {
          to: '/Wellness',
          text: "Wellness",
          image: "//spiruswastha.com/cdn/shop/files/wellness_medium.svg?v=1736144535"
        },
        {
          to: '/Cleansing',
          text: "Cleansing",
          image: "//spiruswastha.com/cdn/shop/files/cleansing_0ea84d00-8cca-4836-ad59-4bd4b897caae_medium.svg?v=1736144560"
        }
      
      ]


  return (
    <Section title="Shop By Categories  "   >
      <div  className="flex flex-wrap   justify-center items-center ">
        {categories.map((category , i) => (

            <NavLink to={navigation[i].to} data-aos="fade-up" data-aos-duration="2000" data-aos-offset="5" data-aos-once="false" data-aos-delay="1000" className="rounded-lg mt-[1.875rem] px-[0.9375rem] w-1/3 md:w-1/4 lg:w-1/6 hover:opacity-60 hover:cursor-pointer transition duration-300">
              <img src={category.image} alt={category.name} className="w-full  object-cover" />
              <div className="pt-[1.25rem] bg-white text-center font-semibold">{category.name}</div>
            </NavLink>
        ))}
      </div>
    </Section>
  )
}

export default ShopByCategories
