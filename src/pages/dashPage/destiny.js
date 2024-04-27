import NavDash from "@/component/NavDash";
import useBanner from "@/useApi/useBanner";
import useDelete from "@/useApi/useDelete"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Destiny(){
    const {deleteData} = useDelete();
    const {getBanner,loading,banner} = useBanner();
    const route = useRouter();
    useEffect(()=>{
        getBanner();
    }, [])

    // const handleDelete = async (id) =>{
    //     try{
    //         const resp = await deleteData(`delete-banner/${id}`);
    //     if (resp.status === 200) {
    //         window.location.reload();
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return(
        <NavDash>
            <div className="container px-4 tengah wrap gap-4 my-5">
                <div className="text-end my-3" style={{width:"94%"}}>
                    <button className="btn btn-primary" onClick={()=>route.push('/form/banner/addBanner')}>Add</button>
                </div>
                {banner.length>0 &&(
                    banner.map((bannered)=>(
                        <div>
                            <img src={bannered.imageUrl} alt={bannered.name} style={{height:"14rem", width:"14rem"}}/>
                            <div style={{background:"#EEE"}}>
                                <h6 className="fw-bold pt-3">{bannered.name}</h6>
                                <div className="d-flex gap-3 tengah p-3" >
                                    <button className="btn btn-success" onClick={()=>route.push(`/form/banner/${bannered.id}`)}>Update</button>
                                    {/* <button className="btn btn-danger" onClick={handleDelete(bannered.id)}>Delete</button> */}
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