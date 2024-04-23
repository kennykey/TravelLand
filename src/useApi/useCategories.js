import { useState } from "react";
import axios from "axios";

export default function useCategories(){
    const [loading,setLoading] = useState(false);
    const [categories,setCategories] = useState([]);

    const getCategories = async()=>{
        setLoading(true);
        try{
            const resp = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories',{
                headers:{
                    apiKey:'24405e01-fbc1-45a5-9f5a-be13afcd757c'
                },
            });
            setCategories(resp.data.data);
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }
    return {getCategories,loading,categories};
}