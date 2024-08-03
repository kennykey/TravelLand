"use client"
import NavDash from "@/component/NavDash";
import useDelete from "@/useApi/useDelete"
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import useGetData from "@/useApi/useGetData";
import Button from "@/component/ui/Button";

 export default function Promo(){
    const {deleteData} = useDelete();
    const {getData} = useGetData();
    const [promo,setPromo] = useState([]);
    const route = useRouter();

    useEffect(()=>{
        getData(`promos`).then((res)=>setPromo(res.data.data));
    }, [])

    const handleDelete = async (id) =>{
        try{
            const resp = await deleteData(`delete-promo/${id}`);
        if (resp.status === 200) {
            window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <NavDash>
            <div className="container px-4 tengah wrap gap-3 my-5">
                <div className="text-end my-3" style={{width:"94%"}}>
                    <Button className="btn btn-primary" onClick={()=>route.push('/form/promo/addPromo')}>Add</Button>
                </div>
                {promo.length>0 &&(
                    promo.map((promon)=>(
                        <div key={promon.id}>
                            <img src={promon.imageUrl} alt={promon.title} style={{height:"14rem", width:"14rem"}}/>
                            <div style={{background:"#EEE"}}>
                                <h6 className="fw-bold pt-3">{promon.title}</h6>
                                <div className="d-flex gap-3 tengah p-3" >
                                    <Button className="btn btn-success" onClick={()=>route.push(`/form/promo/${promon.id}`)}>Update</Button>
                                    <Button className="btn btn-danger" onClick={() => handleDelete(promon.id)}>Delete</Button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </NavDash>
    )
 }