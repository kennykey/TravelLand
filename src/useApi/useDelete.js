import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Delete(){
    const [loading,setLoading] = useState(false);
    const [data, setData] = useState([]);
    const route = useRouter();

    const deleteData = async(url)=>{
        setLoading(true);
        try{
            const res = await axios.delete(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`,
                    apiKey:"24405e01-fbc1-45a5-9f5a-be13afcd757c",
                }
            });
            setData(res.data.data);
            route.push('/dashPage/destiny')
        }catch(error){
            console.log(error);
        }
        setLoading(false)
    }
    return {deleteData, loading, data}
}