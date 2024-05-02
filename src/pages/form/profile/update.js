import NavDash from "@/component/NavDash";
import { useRouter } from "next/router";
import { useState } from "react";
import useCreate from "@/useApi/useCreate";
import { Container,Form,Button } from "react-bootstrap";


export default function updateProfile(){
    const [profileImage, setProfileImage] = useState([]);
    const [promp, setPromp] = useState([]);
    const {postCreate} = useCreate();
    const route = useRouter();

    const handleChange = async (e) => {
        const file = e.target.files[0];
        if (!file?.type?.startsWith('image/')) {
            setPromp('File should be .jpeg, .jpg or .png format');
            return;
        }
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = await postCreate('upload-image', formData);
            setProfileImage(res.data.url);
        } catch (err) {
            setPromp(err);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const profileData ={
            name:e.target.name.value,
            email:e.target.email.value,      
            imageUrl:profileImage,
            phoneNumber: e.target.phoneNumber.value,
        }
        console.log(profileData);
        try {
            const res = await postCreate('update-profile', profileData);
            if (res?.status === 200) {
                setPromp(res?.data?.message);
            }
        } catch (err) {
            setPromp(err?.response?.data?.message);
        }
    };

    return(
        <NavDash>
            <Container className="d-flex m-5 tengah">
                <Form onSubmit={handleUpload} style={{width:"400px"}}>
                    <p>{promp}</p>
                    <img src={profileImage}  alt="image-upload" style={{width:"200px", height:"200px"}}/>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter userName" name="name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="email" placeholder="Enter Email" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formImage">
                        <Form.Control type="file" placeholder="Enter image file" name="image" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Control type="number" placeholder="Enter phoneNumber" name="phoneNumber"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}