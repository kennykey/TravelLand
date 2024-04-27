import axios from "axios";
import { useState } from "react";

export default function useGetData() {
    const [detail,setDetial] = useState([]);
    const getData = async (url) => {
        try {
            const resp = await axios.get(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,{
                    headers: {
                        Authorization:`Bearer ${localStorage.getItem("token")}`,
                        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                });
                setDetial(resp.data.data)
        } catch (error) {
            console.log(error);
        }
    };
    return { getData,setDetial };
}