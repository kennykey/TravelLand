import LayOut from "@/component/LayOut";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetData from "@/useApi/useGetData";

export default function categoryDetail(){
    const [detail, setDetail] = useState([]);
    const route = useRouter();
    const {getData} = useGetData();

    useEffect(()=>{
        getData(`category/${route.query.id}`).then((res)=>setDetail(res.data.data));
    }, [])

    return(
        <LayOut>
            <div key={detail.id} className=" container mx-auto tengah-detail gap-5 border border-dark p-5 m-5" style={{width:"40%"}}>
                <img src={detail.imageUrl} alt={detail.name} className="img-detail mx-auto"/>
                <div className="ps-5 text-start">
                    <p>Name: {detail.name}</p>
                    <p>Create at: {detail.createdAt}</p>
                    <p>Update at: {detail.updatedAt}</p>
                </div>
            </div>
        </LayOut>
    )
}