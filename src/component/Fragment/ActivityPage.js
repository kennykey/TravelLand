import useGetData from "@/useApi/useGetData"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function ActivityPage(){
    const [detail, setDetail] = useState([]);
    const {getData} = useGetData();
    const route = useRouter();

    useEffect(()=>{
        getData(`activities`).then((resp)=>setDetail(resp.data.data))
    })
    return(
        <container>
            <div className="container px-4 tengah wrap gap-3 my-5">
                {detail.length > 0 && (
                    detail.map((res)=>(
                        <div>
                            <button onClick={()=>route.push(`/detail/activity/${res.id}`)}>
                                <img src={res.imageUrls[0] || res.imageUrls[1]} alt={res.title} style={{height:"14rem", width:"16rem"}}/>
                                <div>
                                    <h6>{res.title}</h6>
                                </div>
                            </button>
                        </div>
                    ))
                )}
            </div>
        </container>
    )
}