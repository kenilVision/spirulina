import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Query from "../component/common/Query";
import DataCard from "../component/common/DataCard";
import { GetSingleCategories } from "../Api/Category";
import { GetproductbyCategories } from "../Api/product";
 function Collection() {




  // --------------------------------------------- search and filter--------------------------------


  const sortOptions = [
    { label: "Featured", value: "Featured" },
    { label: "Best selling", value: "bestselling" },
    { label: "Alphabetically, A-Z", value: "alphabetical-asc" },
    { label: "Alphabetically, Z-A", value: "alphabetical-desc" },
    { label: "Price, low to high", value: "price-asc" },
    { label: "Price, high to low", value: "price-desc" },
    { label: "Date, old to new", value: "date-asc" },
    { label: "Date, new to old", value: "date-desc" },
  ];      // Sort options for the dropdown

  
 const [selected, setSelected] = useState({label:"Featured"});  // Default selected option
 const [value, setValue] = useState([0.0, 3599.0]);    // State to control range slider values
 const [min , setmin] = useState(value[0])
 const [max , setmax] = useState(value[1])
 const [page, setPage] = useState(1);

 const minmaxcontrol = () => {
   setmin(value[0])
   setmax(value[1])

 }

  const [isOpenfilter, setIsOpenfilter] = useState(false);   // State to control filter sidebar visibility
  const [isOpen, setIsOpen] = useState(false);        // State to control dropdown visibility
  const [isOpen2, setIsOpen2] = useState(false);      // State to control sort slider visibility


// ------------------------- calls -----------------------------------------------
  const { collectionName } = useParams();
  const formattedName = collectionName.replace(/-/g, ' ');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        window.scrollTo(0, 0);
        setLoading(true);
        let categoryId = "";
        if (formattedName !== "all") {
          const categoryResponse = await GetSingleCategories(formattedName);
          if (categoryResponse.length > 0) {
            categoryId = categoryResponse[0]._id;
          }
        }


         const  params = {
            minPrice: min || 0,
            maxPrice: max || 10000,
            page: page,
            limit: 5,
            ...(categoryId && { categoryId }),
            ...(selected?.value === "Featured" && { isFeatured: true }),
            ...(selected?.value === "bestselling" && { isBestSeller: true }),
            ...(!["Featured", "bestselling"].includes(selected?.value) && { sort: selected?.value }),
          };

          console.log(params)

            const query = new URLSearchParams(params).toString();
            const productResponse = await GetproductbyCategories(query);
            console.log(productResponse)
            setData(productResponse)
            
            } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [formattedName ,selected , min , max,page]);


 

  return (
    <div className="w-full max-w-[1470px] mx-auto p-[15px] pb-[50px] lg:pb-[60px] mb-0 md:mb-[50px]">
      {loading ? (
       <div className="w-full h-screen flex items-center justify-center bg-white">
          <img 
              src="https://spiruswastha.com/cdn/shop/t/25/assets/t4s_loader.svg?v=145003788389301961301736154755" 
              alt="Loading..." 
              className="w-16 h-16"
            />
      </div>
      ) : data.length === 0 ? (
          <>
          <Query 
          sortOptions={sortOptions}
          selected={selected}
          setSelected={setSelected}
          isOpenfilter= {isOpenfilter}
          setIsOpenfilter={setIsOpenfilter}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsOpen2={setIsOpen2}
          isopen2={isOpen2}
          value={value}
          setValue={setValue}
          minmaxcontrol={minmaxcontrol} 
          />

        <div className="w-full py-12 flex flex-col items-center justify-center text-center rounded-xl ">
          <p className="text-gray-500 text-lg font-medium">No product found</p>
        </div>
          </>
      ) : (
        <>
          <Query 
          sortOptions={sortOptions}
          selected={selected}
          setSelected={setSelected}
          isOpenfilter= {isOpenfilter}
          setIsOpenfilter={setIsOpenfilter}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsOpen2={setIsOpen2}
          isopen2={isOpen2}
          value={value}
          setValue={setValue}
          minmaxcontrol={minmaxcontrol}
          />
          <DataCard 
           combinedData={data.products} 
           pagination={data.pagination} 
           onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}

export default Collection;
