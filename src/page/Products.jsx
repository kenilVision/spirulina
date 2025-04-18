import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Description from '../component/Products/Description'
import MayalsoLike from '../component/Products/MayalsoLike'
import Ingredient from '../component/Products/Ingredient'
import FAQs from '../component/Products/FAQs'
import WhySpiruSwastha from '../component/Products/WhySpiruSwastha'
import HowToUse from '../component/Products/HowToUse'
import Benefit from '../component/Products/Benefit'
import CustomerReviw from '../component/Products/CustomerReviw'
import Product from '../component/Products/Product'
import { Products } from '../Constant/Product.js'
import { CustomerReview } from '../Constant/CustomerReview'
import StickyAddToCart from '../component/Products/StickyAddToCart'
import {fetchSingleProduct,fetchSinglecombo} from '../Slice/product.js'
import { useDispatch , useSelector } from 'react-redux'
import {GetproductContent} from '../Api/productcontent.js'

function Prooducts() {
  const { slug, id } = useParams();
  const product = useSelector((state) => state.product.product)
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()


  const [details,setdetails] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true); 
      console.log("useEffect triggered", slug, id); // NEW log
      try {
        if (slug.endsWith('-combo')) {
          dispatch(fetchSinglecombo(id));
        } else {

          const resultAction = await dispatch(fetchSingleProduct(id));
          console.log(resultAction);  
          
          if (fetchSingleProduct.fulfilled.match(resultAction)) {
            const related = await GetproductContent(id);
            console.log("hello"); 
            setdetails(related)
            console.log( related);
          }
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
      finally {
        setIsLoading(false); // Stop loader
      }
    };

    
  
    fetchProduct();
  }, [slug, id, dispatch]);

  if (isLoading ) {
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

  if (!product ) {
    return <div className="container mx-auto py-12 text-center">Product not found</div>;
  }

  // const relatedProducts = Products
  //   .filter(p => p.category === product.category && p.slug !== slug)
  //   .slice(0, 4)

  // const isCombo = product.category === 'Wellness Combo'
    if(slug.endsWith('-combo')){
      return (
        <>
              <Product product={product} slug={slug}  />
              <Description description={product.description} name={product.name}  />
              <CustomerReviw CustomerReview={CustomerReview} id={product.id} />
              
              <MayalsoLike/>
              <WhySpiruSwastha />
              <StickyAddToCart product={product} type="combo" />
    
        </>
      )
    }
    else{
      console.log(details)
  return (
    <>
          <Product product={product} slug={slug}  />
          <Description description={product.description} name={product.name}  />
          <CustomerReviw CustomerReview={CustomerReview} id={product.id} />
          <Benefit benefits={details.benefits}  name={details.benefitsTitle} />
          <MayalsoLike  />
          <Ingredient Ingredient={details.ingredients} name={details.ingredientsTitle} />
          <HowToUse title={details.stepTitle} detail={details.howToUse} />
          <FAQs FAQs={details.faqs} />
          <WhySpiruSwastha />
          <StickyAddToCart product={product} type="product" />

    </>
  )}
}

export default Prooducts
