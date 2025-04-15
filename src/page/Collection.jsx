import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Query from "../component/common/Query";
import DataCard from "../component/common/DataCard";
import { GetSingleCategories } from "../Api/Category";
import { GetproductbyCategories } from "../Api/product";

function Collection() {
  const { collectionName } = useParams();
  const formattedName = collectionName.replace(/-/g, ' ');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await GetSingleCategories(formattedName);

        if (response.data.length > 0) {
          const productResponse = await GetproductbyCategories(response.data[0]._id);
          setData(productResponse.data);
        } else {
          setData([]); // Category not found
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [formattedName]);

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
        <div className="text-center py-20 text-gray-500 text-lg">
          
          No products found in this collection.
        </div>
      ) : (
        <>
          <Query />
          <DataCard combinedData={data} />
        </>
      )}
    </div>
  );
}

export default Collection;
