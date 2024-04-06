import { useRouter } from "next/router";

export default function Sidebar(){
    const route = useRouter();
    return ( 
        <div className="sidebar">
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action py-2 my-1" onClick={() => route.push("/")}>
                    <i className='bx bx-home-alt-2 fs-5'></i>
                    <span className="ms-2 fs-5">Dashboard</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1">
                    <i className='bx bx-location-plus fs-5'></i>
                    <span className="ms-2 fs-5">Banner</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1">
                    <i className='bx bxs-discount fs-5'></i>
                    <span className="ms-2 fs-5">Promo</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1">
                    <i className='bx bx-category-alt fs-5'></i>
                    <span className="ms-2 fs-5">Category</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1">
                    <i className='bx bx-calendar-event fs-5'></i>
                    <span className="ms-2 fs-5">Activity</span>
                </a>
                <a className="list-group-item list-group-item-action py-2 my-1">
                    <i className='bx bx-images fs-5'></i>
                    <span className="ms-2 fs-5">Upload</span>
                </a>
            </div>
        </div>
     );
}
 
