import React from 'react'
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
import StickyAddToCart from '../component/Products/StickyAddToCart'
import { Products } from '../constant/Product'
import { CustomerReview } from '../constant/CustomerReview'

function Prooducts() {
  const { slug } = useParams()

  // Find first product that matches the slug
  const product = Products.find(item => item.slug === slug)

  if (!product) {
    return <div className="container mx-auto py-12 text-center">Product not found</div>
  }

  const relatedProducts = Products
    .filter(p => p.category === product.category && p.slug !== slug)
    .slice(0, 4)

  const isCombo = product.category === 'Wellness Combo'

  return (
    <>
      <Product product={product} />
      <Description description={product.description} name={product.name} />
      <CustomerReviw CustomerReview={CustomerReview} id={product.id} />

      {isCombo ? (
        <>
          <MayalsoLike relatedProducts={relatedProducts} />
          <WhySpiruSwastha />
          <StickyAddToCart product={product} />
        </>
      ) : (
        <>
          <Benefit benefits={product.benefits} name={product.name} />
          <MayalsoLike relatedProducts={relatedProducts} />
          <Ingredient Ingredient={product.ingredients} name={product.name} />
          <HowToUse slug={product.slug} />
          <FAQs FAQs={product.faqs} />
          <WhySpiruSwastha />
          <StickyAddToCart product={product} />
        </>
      )}
    </>
  )
}

export default Prooducts
