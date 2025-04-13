import React from 'react'
import Query from '../component/common/Query'
import DataCard from '../component/common/DataCard'
import { Products } from '../constant/Product'
function HairCare() {

  const data =   Products.filter((item) => item.category.toLowerCase() === "hair care")
  return (
    <>
    <div className='w-full max-w-[1470px] mx-auto p-[15px]  pb-[50px] lg:pb-[60px] mb-0 md:mb-[50px]'>
    <Query />
    <DataCard combinedData={data} />
 
    </div>
    </>
  )
}

export default HairCare
HairCare