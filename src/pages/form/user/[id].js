import NavDash from "@/component/NavDash"
import { Container,Form,Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UpdateUser(){
    const [promp, setPromp] = useState([]);
    const route = useRouter();

    const handleUpload = async (e) => {
        e.preventDefault();
        const bannerData ={
            role:e.target.role.value,   
        }
        try {
            const res = await postCreate(`update-user-role/${route.query.id}`, bannerData);
            if (res?.status === 200) {
                setPromp(res?.data?.message);
            }
        } catch (err) {
            setPromp(err?.response?.data?.message);
        }
    };  

    return(
        <NavDash>
            <Container className="m-5" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Form onSubmit={handleUpload}>
                    <p>{promp}</p>
                    <Form.Group className="mb-3" controlId="formBasicrole" className="w-100">
                    <Form.Label>role</Form.Label>
                    <Form.Select name="role">
                        <option role="user">user</option>
                        <option role="admin">admin</option>
                    </Form.Select>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}