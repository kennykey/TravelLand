import { useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


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
        } catch(error){
        console.error("Gagal melakukan autentikasi:", error.message);
        alert("Gagal melakukan autentikasi. Silakan coba lagi.");
        }
        setLoading(false); 
    };

    const LogOut = async(url)=>{
        setLoading(true);
        try{
            const resp = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`,
                        apiKey:"24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                });
            if(url === "logout"){
                localStorage.removeItem("token");
                useCallback(resp);
            }else{
                useCallback(resp.data.data);
            }
            route.push('/');
        }catch(error){
            console.error("Gagal melakukan LogOut", error.message);
            alert("gagal melakukan LogOut silahkan coba lagi");
        }
        setLoading(false);
    }

    return {Auth, LogOut, loading};
}