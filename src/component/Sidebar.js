import { useRouter } from "next/router";

export default function Sidebar(){
    const route = useRouter();
    return ( 
        <div className="sidebar me-5    " style={{borderRight:"2px solid #3333", width:"200px"}}>
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action py-2 my-1" onClick={() => route.push("/")}>
                    <i className='bx bx-home-alt-2 fs-5'></i>
                    <span className="ms-1 fs-5">Home</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1" onClick={()=>route.push("/dashPage/userList")}>
                    <i className='bx bxs-user fs-5'></i>
                    <span className="fs-5">UserList</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1" onClick={()=>route.push("/dashPage/destiny")}>
                    <i className='bx bx-location-plus fs-5'></i>
                    <span className="fs-5">Banner</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1" onClick={()=>route.push("/dashPage/Promo")}>
                    <i className='bx bxs-discount fs-5'></i>
                    <span className="fs-5">Promo</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1" onClick={()=>route.push("/dashPage/category")}>
                    <i className='bx bx-category-alt fs-5'></i>
                    <span className="fs-5">Category</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1" onClick={()=>route.push("/dashPage/activity")}>
                    <i className='bx bx-calendar-event fs-5'></i>
                    <span className="fs-5">Activity</span>
                </a>
            </div>
        </div>
     );
}
 
