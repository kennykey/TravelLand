export default function Sidebar(){
    return ( 
        <div className="sidebar">
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action my-2">
                    <i class='bx bx-home-alt-2'></i>
                    <span className="ms-2">Dashboard</span>
                </a>
                <a className="list-group-item list-group-item-action my-2">
                    <i class='bx bx-location-plus'></i>
                    <span className="ms-2">Banner</span>
                </a>
                <a className="list-group-item list-group-item-action my-2">
                    <i class='bx bxs-discount'></i>
                    <span className="ms-2">Promo</span>
                </a>
                <a className="list-group-item list-group-item-action my-2">
                    <i class='bx bx-category-alt'></i>
                    <span className="ms-2">Category</span>
                </a>
                <a className="list-group-item list-group-item-action my-2">
                    <i class='bx bx-calendar-event'></i>
                    <span className="ms-2">Activity</span>
                </a>
                <a className="list-group-item list-group-item-action my-2">
                    <i class='bx bx-images'></i>
                    <span className="ms-2">Upload</span>
                </a>
            </div>
        </div>
     );
}
 
