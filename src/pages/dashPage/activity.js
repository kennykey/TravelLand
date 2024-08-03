"use client"
import NavDash from "@/component/NavDash";
import useDelete from "@/useApi/useDelete"
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "@/component/ui/Button";


export default function Activity(){
    const [activities,setActivtities] = useState([])
    const {deleteData} = useDelete();
    const {getData} = useGetData();
    const route = useRouter();
    useEffect(()=>{
        getData(`activities`).then((res)=>setActivtities(res.data.data));
    }, [])

    const handleDelete = async (id) =>{
        try{
            const resp = await deleteData(`delete-activity/${id}`);
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
                    <Button className="btn btn-primary" onClick={()=>route.push('/form/activity/addActivity')}>Add</Button>
                </div>
                {activities.length>0 &&(
                    activities.map((activi)=>(
                        <div key={activi.id}>
                            <img src={activi.imageUrls} alt={activi.title} style={{height:"14rem", width:"14rem"}}/>
                            <div style={{background:"#EEE"}}>
                                <h6 className="fw-bold pt-3">{activi.title}</h6>
                                <div className="d-flex gap-3 tengah p-3" >
                                    <Button className="btn btn-success" onClick={()=> route.push(`/form/activity/${activi.id}`)}>Update</Button>
                                    <Button className="btn btn-danger" onClick={() => handleDelete(activi.id)}>Delete</Button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </NavDash>
    )
 }