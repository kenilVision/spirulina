import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Description from "../component/Products/Description";
import MayalsoLike from "../component/Products/MayalsoLike";
import Ingredient from "../component/Products/Ingredient";
import FAQs from "../component/Products/FAQs";
import WhySpiruSwastha from "../component/Products/WhySpiruSwastha";
import HowToUse from "../component/Products/HowToUse";
import Benefit from "../component/Products/Benefit";
import CustomerReviw from "../component/Products/CustomerReviw";
import Product from "../component/Products/Product";
import { CustomerReview } from "../Constant/CustomerReview";
import StickyAddToCart from "../component/Products/StickyAddToCart";
import { fetchSingleProduct, fetchSinglecombo } from "../Slice/product.js";
import { useDispatch, useSelector } from "react-redux";
import { GetproductContent } from "../Api/productcontent.js";

function Prooducts({ type = "product" }) {
  const { slug } = useParams();
  const location = useLocation();
  console.log(location);
  const product = useSelector((state) => state.product.product);
  const [isLoading, setIsLoading] = useState(true);
  const [isproduct, setproduct] = useState(true);
  const dispatch = useDispatch();

  const [details, setdetails] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      console.log("useEffect triggered", slug); // NEW log
      try {
        console.log(location.state)
        if (location.state == "combo") {
          const resultAction = await dispatch(fetchSinglecombo(slug));
          console.log(resultAction);
        } else {
          const resultAction = await dispatch(fetchSingleProduct(slug));
          console.log(resultAction)
          if (fetchSingleProduct.fulfilled.match(resultAction)) {
            const related = await GetproductContent(resultAction.payload._id);
            
            setdetails(related);
          }
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setproduct(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug, dispatch]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <img
          src="https://spiruswastha.com/cdn/shop/t/25/assets/t4s_loader.svg?v=145003788389301961301736154755"
          alt="Loading..."
          className="w-16 h-16"
        />
      </div>
    );
  }

  if (!isproduct) {
    return (
      <div className="container mx-auto py-12 text-center">
        Product not found
      </div>
    );
  }

  if (location.state == "combo") {
    return (
      <>
        <Product product={product} slug={location.state} />
        <Description description={product.description} name={product.name} />
        <CustomerReviw CustomerReview={CustomerReview} id={product.id} />
        <MayalsoLike />
        <WhySpiruSwastha />
        <StickyAddToCart product={product} type="combo" />
      </>
    );
  } else {
    console.log(details);
    return (
      <>
        <Product product={product} slug={location.state} />
        <Description description={product.description} name={product.name} />
        <CustomerReviw CustomerReview={CustomerReview} id={product.id} />
        <Benefit benefits={details.benefits} name={details.benefitsTitle} />
        <MayalsoLike />
        <Ingredient
          Ingredient={details.ingredients}
          name={details.ingredientsTitle}
        />
        <HowToUse title={details.stepTitle} detail={details.howToUse} />
        <FAQs FAQs={details.faqs} />
        <WhySpiruSwastha />
        <StickyAddToCart product={product} type="product" />
      </>
    );
  }
}

export default Prooducts;
