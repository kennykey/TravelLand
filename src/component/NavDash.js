import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function NavDash({children}) {
    const [menu, menuBar] = useState(true);

    const showMenu = () => {
        menuBar(!menu);
    }
    return(
        <div>
            <div>
            <Navbar className="mx-3">
                <button onClick={showMenu}><Navbar.Brand><i class='bx bxs-grid-alt'></i> Travel<span style={{color:"#0d6efd"}}>Land</span></Navbar.Brand></button>
                <Nav className="ms-auto">
                    <Nav.Link><i class='bx bxs-home'></i> Home</Nav.Link>
                    <Nav.Link><i class='bx bxs-user'></i> About</Nav.Link>
                    <Nav.Link><i class='bx bxs-user'></i> Contact</Nav.Link>
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