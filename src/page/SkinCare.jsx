import React from 'react'
import Query from '../component/Skincare/Query'
import DataCard from '../component/Skincare/DataCard'
function SkinCare() {
  return (
    <>
   <div className='w-full max-w-[1470px] mx-auto p-[15px]  pb-[50px] lg:pb-[60px] mb-0 md:mb-[50px]'>
   <Query />
   <DataCard />

   </div>
   </>
  )
}

export default SkinCare
