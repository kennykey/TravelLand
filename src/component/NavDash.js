import { Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import useAuth from "@/useApi/useAuth";

export default function NavDash({children}) {
    const [menu, menuBar] = useState(true);

    const showMenu = () => {
        menuBar(!menu);
    }
    return(
        <div>
            <div>
            <Navbar className="px-3" style={{borderBottom:"2px solid #3333"}}>
                <button onClick={showMenu}><Navbar.Brand><i className='bx bxs-grid-alt'></i> Travel<span style={{color:"#0d6efd"}}>Land</span></Navbar.Brand></button>
                <Nav className="ms-auto">
                    <Nav.Link><i className='bx bxs-home'></i>Home</Nav.Link>
                    <Nav.Link><i className='bx bx-log-out fs-3'></i></Nav.Link>
                </Nav>
            </Navbar>
            </div>
            <div className="container-fluid d-flex" style={{height:"100vh"}}>
                {menu && <Sidebar/>}
                {children}
            </div>
        </div>
    )
}