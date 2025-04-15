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
import {fetchSingleProduct} from '../Slice/product.js'
import { useDispatch , useSelector } from 'react-redux'
function Prooducts() {
  const { slug, id } = useParams();
  const [loading, setLoading] = useState(true);
  const product = useSelector((state) => state.product.product)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        dispatch(fetchSingleProduct(id))
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug, id]);

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

  if (!product) {
    return <div className="container mx-auto py-12 text-center">Product not found</div>;
  }

  // const relatedProducts = Products
  //   .filter(p => p.category === product.category && p.slug !== slug)
  //   .slice(0, 4)

  // const isCombo = product.category === 'Wellness Combo'

  return (
    <>
          <Product product={product}  />
          <Description description={product.description} name={product.name}  />
          {/* <CustomerReviw CustomerReview={CustomerReview} id={product.id} /> */}
          {/* <Benefit benefits={product.benefits} name={product.name} /> */}
          {/* <MayalsoLike relatedProducts={relatedProducts} /> */}
          {/* <Ingredient Ingredient={product.ingredients} name={product.name} /> */}
          {/* <HowToUse slug={product.slug} /> */}
          {/* <FAQs FAQs={product.faqs} /> */}
          <WhySpiruSwastha />
          {/* <StickyAddToCart product={product} /> */}

    </>
  )
}

export default Prooducts
