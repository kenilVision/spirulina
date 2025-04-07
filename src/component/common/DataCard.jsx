import React from 'react'
import ProductCard from './ProductCard'
function DataCard({data,image}) {

  const image2 = "https://spiruswastha.com/cdn/shop/files/Face_pack_cream_Benefits.jpg?v=1735895098&width=800"
  


      
  return (
    <div className='grid grid-cols-2 gap-x-[30px] gap-y-[30px]  lg:grid-cols-4' >   
    {data.map((item,index)=>{
        const hasDiscount = item.price && item.price.discounted !== undefined;
    
    return (     <ProductCard 
                            key={index}
                            title={item.name}
                            image={image[index]}
                            image2={image2}
                            orignalPrice={hasDiscount ? item.price.original : null}
                            discountedPrice={hasDiscount ? item.price.discounted : null}
                            discountPercentage={hasDiscount ? item.price.discount_percentage : null}
                            price={!hasDiscount && item.price_range ? `₹${item.price_range.from} - ₹${item.price_range.to}` : null}
    />)
    }
)}
    </div>
  )
}

export default DataCard
