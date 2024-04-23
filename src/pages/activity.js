import LayOut from "@/component/LayOut";
import { useEffect } from "react";
import useActivities from "@/useApi/useActivities";
import { useRouter } from "next/router";

export default function activity(){
    const {getActivities,loading,activities} = useActivities();
    const route = useRouter();
    useEffect(()=>{
        getActivities();
    },[])
    return(
        <LayOut>
            <div className="container px-4 tengah wrap gap-3 my-5">
                {activities.length > 0 && (
                    activities.map((res)=>(
                        <div>
                            <img src={res.imageUrls[0] || res.imageUrls[1]} alt={res.title} style={{height:"14rem", width:"18rem"}}/>
                            <div>
                                <h6>{res.title}</h6>
                            </div>
                        </div>
                    ))
                )}
            </div>
        <hr/>
        </LayOut>
    )
}