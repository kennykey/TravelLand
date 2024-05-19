import { Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import axios from "axios";

export default function NavDash({children}) {
    const [account, setAccount] = useState([]);
    const [menu, menuBar] = useState(true);
    const {getData} = useGetData();
    const route = useRouter()
    
    useEffect(()=>{
        getData(`user`).then((res)=>setAccount(res?.data?.data))
    }, [])
    console.log(account);

    const handleLogout = () =>{
        try{
                axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout`,
                {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`,
                        apiKey:"24405e01-fbc1-45a5-9f5a-be13afcd757c",
                    },
                });
                localStorage.removeItem("token");
                localStorage.removeItem("email")
                route.push('/');
        }catch(error){
            console.error("Gagal melakukan LogOut", error.message);
            alert("gagal melakukan LogOut silahkan coba lagi");
        }
    }

    const showMenu = () => {
        menuBar(!menu);
    }
    return(
        <div>
            <div>
                <Navbar className="px-3" style={{borderBottom:"2px solid #3333"}}>
                    <button onClick={showMenu}><Navbar.Brand><i className='bx bxs-grid-alt'></i> Travel<span style={{color:"#0d6efd"}}>Land</span></Navbar.Brand></button>
                    <Nav className="ms-auto">
                        <Nav.Link onClick={()=>route.push(`/form/profile/update`)}><div className="d-flex gap-3"><img src={account.profilePictureUrl} alt={account.name} style={{width:"30px", height:"30px", borderRadius:"50%"}}/>{account.name}</div></Nav.Link>
                        <Nav.Link onClick={handleLogout}><i className='bx bx-log-out fs-3'></i></Nav.Link>
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