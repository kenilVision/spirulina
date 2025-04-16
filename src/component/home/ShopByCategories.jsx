import React,{useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import HomeSectionHeading from "../common/HomeSectionHeading";
import "aos/dist/aos.css";
import { GetCategories } from "../../Api/Category";

const  ShopByCategories = () => {

    const [Categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        const data = await GetCategories();
        if (data) {
          setCategories(data);
        }
      };
  
      fetchCategories();
    }, []);


  // const categories = [      // Array of categories with their properties
  //   {
  //     name: "Immunity",
  //     to: "/Immunity",
  //     url: "/collections/immunity",
  //     image: "//spiruswastha.com/cdn/shop/files/Iimmunity.svg?v=1733740496",
  //   },
  //   {
  //     name: "Skin Care",
  //     to: "/SkinCare",
  //     url: "/collections/skin-care",
  //     image: "//spiruswastha.com/cdn/shop/files/Skin.svg?v=1733740527",
  //   },
  //   {
  //     name: "Hair Care",
  //     to: "/HairCare",
  //     url: "/collections/hair-care",
  //     image: "//spiruswastha.com/cdn/shop/files/Hair.svg?v=1733740556",
  //   },
  //   {
  //     name: "Heart Care",
  //     to: "/HeartCare",
  //     url: "/collections/heart-care",
  //     image: "//spiruswastha.com/cdn/shop/files/Heart.svg?v=1733740586",
  //   },
  //   {
  //     name: "Wellness",
  //     to: "/Wellness",
  //     url: "/collections/wellness",
  //     image: "//spiruswastha.com/cdn/shop/files/Strength.svg?v=1733740610",
  //   },
  //   {
  //     name: "Cleansing",
  //     to: "/Cleansing",
  //     url: "/collections/cleansing",
  //     image: "//spiruswastha.com/cdn/shop/files/Cleansing.svg?v=1733740640",
  //   },
  // ];
  return (
    <div className=" my-[3.125rem] md:mt-[5rem] md:mb-[6.25rem]   lg:my-[9.375rem]">
      <div className="w-full max-w-[1440px]  mx-auto text-center px-[15px]">
        <HomeSectionHeading title="Shop By Categories" />
        <div className="flex flex-wrap   justify-center items-center ">
          {Categories.map((category) => (
            <NavLink
            to={`/collection/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="rounded-lg mt-[1.875rem] px-[0.9375rem] w-1/3 md:w-1/4 lg:w-1/6 hover:opacity-60 hover:cursor-pointer transition duration-300"
            >
              <img
                src={`http://localhost:5050/image/categories/images/${category.image}`}
                className="w-full  object-cover"
              />
              <div className="pt-[1.25rem] bg-white text-center font-semibold">
                {category.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopByCategories;
