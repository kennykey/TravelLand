import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function useAuth(){
    const [loading,setLoading] = useState(false);
    const route = useRouter();

    const Auth = async(url,option)=>{
        setLoading(true);
        try{
        const resp = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
            option,{
            headers:{
                apiKey:"24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
        });
        localStorage.setItem('token',resp.data.token);
        localStorage.setItem('email',resp.data.data.email);
        route.push("/dashPage/userList");
        setLoading(false); 
        } catch(error){
        console.error("Gagal melakukan autentikasi:", error.message);
        alert("Gagal melakukan autentikasi. Silakan coba lagi.");
        setLoading(false); 
        }
    };

    const account = async()=>{
        try{
            const resp = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user`,
                {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`,
                        apiKey:"24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                });
                return resp;
        }catch(error){
            console.log(error);
        }
    }

    return {Auth, account, loading};
}