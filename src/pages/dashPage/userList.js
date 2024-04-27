import NavDash from "@/component/NavDash";
import useUser from "@/useApi/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function userList(){
    const {getUser, user} = useUser(false);
    const route = useRouter();
    useEffect(()=>{
        getUser(true);
    }, []);

    return(
        <NavDash>
            <div className="container mx-5 mt-3">
                <div className="text-end my-3" style={{width:"97%"}}>
                    <button className="btn btn-primary">Add</button>
                </div>
                <div className="text-center">
                <table className="table table-bordered" style={{width:"80%"}}>
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Edit</th>
        ,.              </tr>
                    </thead>
                    <tbody>
                        {user.length > 0 && (
                            user.map((userData)=>(
                            <tr>
                                <td><img src={userData.profilePictureUrl} alt={userData.name} style={{height:"50px", width:"50px", borderRadius:"50%"}}/></td>
                                <td>{userData.name}</td>
                                <td>{userData.role}</td>
                                <td>{userData.email}</td>
                                <td>{userData.phoneNumber}</td>
                                <td>
                                    <div className="d-flex">
                                        <button className="btn btn-success">Update</button>
                                    </div>
                                </td>
                            </tr>
                            ))
                        )}
                    </tbody>
                </table>
                </div>
            </div>
        </NavDash>
    )
}