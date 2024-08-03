import NavDash from "@/component/NavDash";
import useCreate from "@/useApi/useCreate";
import { useState } from "react";
import { Container,Form } from "react-bootstrap";
import Input from "@/component/ui/Input";
import Button from "@/component/ui/Button";


export default function addActivity(){
    const [activityImage,setactivityImage] = useState(null);
    const [promp, setPromp] = useState('');
    const {postCreate} = useCreate();

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
            setactivityImage(res.data.url);
        } catch (err) {
            setPromp(err);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const activityData ={
            categoryId:e.target.categoryID.value,
            title:e.target.title.value,  
            description:e.target.description.value,   
            imageUrls:activityImage,
            price: Number(e.target.price.value),
            price_discount: Number(e.target.discount.value),  
            rating: Number(e.target.rating.value),  
            total_reviews: Number(e.target.review.value),
            facilities:e.target.facilities.value,  
            address:e.target.address.value,  
            province:e.target.province.value,
            city:e.target.city.value,  
            location_maps:e.target.location.value,  
        }
        console.log(activityData);
        try {
            const res = await postCreate('create-activity', activityData);
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
                    <img src={activityImage} alt="image-upload" style={{width:"200px", height:"200px"}}/>
                    <Input type='text' name='categoryID' id='categoryID'/>
                    <Input type='text' name='title' id='title'/>
                    <Input type='text' name='description' id='description' rows='3'/>
                    <Input type='file' name='image' id='image' onChange={handleChange}/>
                    <Input type='number' name='price' id='price'/>
                    <Input type='number' name='discount' id='discount'/>
                    <Input type='number' name='rating' id='rating'/>
                    <Input type='number' name='review' id='review'/>
                    <Input type='text' name='facilities' id='facilities'/>
                    <Input type='text' name='address' id='address'/>
                    <Input type='text' name='province' id='province'/>
                    <Input type='text' name='city' id='city'/>
                    <Input type='textarea' name='location' id='location' rows='3'/>
                    <Button type="submit" className="btn btn-primary w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}