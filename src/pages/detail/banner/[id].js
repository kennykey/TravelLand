"use client"
import LayOut from "@/component/LayOut";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetData from "@/useApi/useGetData";
import Image from "next/image";

export default function bannerDetail(){
    const [detail, setDetail] = useState([]);
    const {getData} = useGetData()
    const route = useRouter();

    useEffect(()=>{
        getData(`banner/${route.query.id}`).then((res)=>setDetail(res.data.data))
    }, [])

    return(
        <LayOut>
            <div key={detail.id} className=" container mx-auto tengah-detail gap-5 border border-dark p-5 m-5" style={{width:"40%"}}>
                <Image src={detail.imageUrl} alt={detail.name} className="img-detail mx-auto" height={300} width={300}/>
                <div>
                    <p className="fw-bold fs-2 ps-4 text-start">Name: {detail.name}</p>
                </div>
            </div>
        </LayOut>
    )
}