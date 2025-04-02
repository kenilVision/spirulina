import React from 'react'
import Section from '../common/Section'
function ShopByCategories() {

    const categories = [
        {
          id: "b_collection_item_KXKTCi",
          name: "Immunity",
          url: "/collections/immunity",
          image: "//spiruswastha.com/cdn/shop/files/Iimmunity.svg?v=1733740496"
        },
        {
          id: "b_collection_item_wHEHQn",
          name: "Skin Care",
          url: "/collections/skin-care",
          image: "//spiruswastha.com/cdn/shop/files/Skin.svg?v=1733740527"
        },
        {
          id: "b_collection_item_6zf9Ec",
          name: "Hair Care",
          url: "/collections/hair-care",
          image: "//spiruswastha.com/cdn/shop/files/Hair.svg?v=1733740556"
        },
        {
          id: "b_collection_item_iVaTYf",
          name: "Heart Care",
          url: "/collections/heart-care",
          image: "//spiruswastha.com/cdn/shop/files/Heart.svg?v=1733740586"
        },
        {
          id: "b_collection_item_dB87Nw",
          name: "Wellness",
          url: "/collections/wellness",
          image: "//spiruswastha.com/cdn/shop/files/Strength.svg?v=1733740610"
        },
        {
          id: "b_collection_item_WRAUiV",
          name: "Cleansing",
          url: "/collections/cleansing",
          image: "//spiruswastha.com/cdn/shop/files/Cleansing.svg?v=1733740640"
        }
      ];

  return (
    <Section title="Shop By Categories">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center grid-auto-rows-auto">
        {categories.map((category) => (

            <div className="rounded-lg mt-[1.875rem] px-[0.9375rem] transition duration-300">
              <img src={category.image} alt={category.name} className="w-full  object-cover" />
              <div className="pt-[1.25rem] bg-white text-center font-semibold">{category.name}</div>
            </div>
        ))}
      </div>
    </Section>
  )
}

export default ShopByCategories
