import React from 'react'
import Query from '../component/immunity/Query'
import DataCard from '../component/immunity/DataCard'

function Immunity() {
  return (
   <>
   <div className='w-full max-w-[1470px] mx-auto p-[15px]  pb-[50px] lg:pb-[60px] mb-0 md:mb-[50px]'>
   <Query />
   <DataCard />

   </div>
   </>
  )
}

export default Immunity
