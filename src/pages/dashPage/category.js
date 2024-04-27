import NavDash from "@/component/NavDash";
import useCategories from "@/useApi/useCategories";
import useDelete from "@/useApi/useDelete"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Category(){
    const {deleteData} = useDelete();
    const {getCategories,loading,categories} = useCategories();
    const route = useRouter();
    
    useEffect(()=>{
        getCategories();
    }, [])

    // const handleDelete = async (id) =>{
    //     try{
    //         const resp = await deleteData(`delete-category/${id}`);
    //     if (resp.status === 200) {
    //         window.location.reload();
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return(
        <NavDash>
            <div className="container px-4 tengah wrap gap-3 my-5">
            <   div className="text-end my-3" style={{width:"94%"}}>
                    <button className="btn btn-primary">Add</button>
                </div>
                {categories.length>0 &&(
                    categories.map((catego)=>(
                        <div>
                            <img src={catego.imageUrl} alt={catego.name} style={{height:"14rem", width:"14rem"}}/>
                            <div style={{background:"#EEE"}}>
                                <h6 className="fw-bold pt-3">{catego.name}</h6>
                                <div className="d-flex gap-3 tengah p-3" >
                                    <button className="btn btn-success" onClick={()=>route.push(`/form/category/${catego.id}`)}>Update</button>
                                    {/* <button className="btn btn-danger" onClick={handleDelete(catego.id)}>Delete</button> */}
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