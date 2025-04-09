import React from 'react'
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

function Prooducts() {
  return (
   <>
   <Product />
   <Description />
   <CustomerReviw />
   <Benefit />
   <MayalsoLike />
   <Ingredient />
   <HowToUse />
   <FAQs />
   <WhySpiruSwastha />
   <StickyAddToCart />
   </>
  )
}

export default Prooducts
