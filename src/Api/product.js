import axiosInstance from "../axios/axios";


export const GetproductbyCategories = async (query) =>{    

    try{
        const res = await axiosInstance.get(`/product/get?${query}`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}


export const checkStock = async (data) =>{    

    try{
        const res = await axiosInstance.post(`/product/check-stock`,
            data,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
            );
        return res;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}



