import axiosInstance from "../axios/axios";


export const GetCategories = async () =>{    

    try{
        const res = await axiosInstance.get("/category/get?search=");
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}


export const GetSingleCategories = async (search) =>{    

    try{
        const res = await axiosInstance.get(`/category/get?search=${search}`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}

