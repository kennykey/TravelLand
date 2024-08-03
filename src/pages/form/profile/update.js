import NavDash from "@/component/NavDash";
import { useRouter } from "next/router";
import { useState } from "react";
import useCreate from "@/useApi/useCreate";
import { Container,Form } from "react-bootstrap";
import Input from "@/component/ui/Input";
import Button from "@/component/ui/Button";

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
                    <Input type='text' id='name' name='name'/>
                    <Input type='email' id='email' name='email'/>
                    <Input type='number' id='phoneNumber' name='phoneNumber'/>
                    <Input type='file' name='image' id='image' onChange={handleChange}/>
                    <Button type="submit" className="btn btn-primary w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}