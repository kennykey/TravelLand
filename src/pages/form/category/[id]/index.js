import NavDash from "@/component/NavDash";
import useCreate from "@/useApi/useCreate";
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container,Form,Button } from "react-bootstrap";


export default function updateCategory(){
    const {getData} = useGetData();
    const [categoryImage,setcategoryImage] = useState(null);
    const [promp, setPromp] = useState('');
    const {postCreate} = useCreate();
    const route = useRouter()

    useEffect(()=>{
        getData(`category/${route.query.id}`);
    })

    const handleChange = async (e) => {
        const file = e.target.files[0];
        if (!file?.type?.startsWith('image/')) {
            setPromp('File should be .jpeg, .jpg or .png format');
            return;
        }
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = await postCreate(`upload-image/${route.query.id}`, formData);
            setcategoryImage([...categoryImage, res?.data?.url]);
            setcategoryImage(res?.data?.url);
        } catch (err) {
            setPromp(err?.response?.data?.message);
        }
    console.log(setcategoryImage);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const categoryData ={
            name:e.target.name.value,   
            imageUrl:categoryImage,
        }
        console.log(categoryData);
        try {
            const res = await postCreate('update-category', categoryData);
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
                <Form  onSubmit={handleUpload} style={{width:"400px"}}>
                    <p>{promp}</p>
                    <img src={bannerImage} alt="image-upload" style={{width:"200px", height:"200px"}}/>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter name category" name="name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formImage">
                        <Form.Control type="file" placeholder="Enter image file" name="image" onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}