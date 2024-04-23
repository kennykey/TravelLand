import NavDash from "@/component/NavDash";
import usePromo from "@/useApi/usePromo"
import { useRouter } from "next/router";
import { useEffect } from "react";

 export default function Promo(){
    const {getPromo , loading, promo} = usePromo();
    const route = useRouter();

    useEffect(()=>{
        getPromo();
    }, [])
    return(
        <NavDash>
            <div className="container px-4 tengah wrap gap-3 my-5">
                <div className="text-end my-3" style={{width:"94%"}}>
                    <button className="btn btn-primary">Add</button>
                </div>
                {promo.length>0 &&(
                    promo.map((promon)=>(
                        <div>
                            <img src={promon.imageUrl} alt={promon.title} style={{height:"14rem", width:"14rem"}}/>
                            <div style={{background:"#EEE"}}>
                                <h6 className="fw-bold pt-3">{promon.title}</h6>
                                <div className="d-flex gap-3 tengah p-3" >
                                    <button className="btn btn-success">Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </NavDash>
    )
 }