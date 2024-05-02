import NavDash from "@/component/NavDash";
import useCreate from "@/useApi/useCreate";
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import { Container,Form,Button } from "react-bootstrap";


export default function updateActivty(){
    const {getData} = useGetData()
    const [update, setUpdate] = useState([]);
    const [activityImage,setactivityImage] = useState(null);
    const [promp, setPromp] = useState('');
    const {postCreate} = useCreate();
    const route = useRouter()
    
    useEffect(()=>{
        getData(`activity/${route.query.id}`).then((resp)=>setUpdate(resp?.data?.data));
    }, [])

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
    console.log(setactivityImage);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const activityData ={
            categoryId:e.target.categoryID.value,
            title:e.target.name.value,  
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
            const res = await postCreate(`update-activity/${route.query.id}`, activityData);
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
                    <Form.Group className="mb-3" controlId="formCategoryID">
                        <Form.Control type="text" placeholder="Enter categoryID activity" name="categoryID"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter title activity" name="title"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Control type="text" as="textarea" rows={3} placeholder="Enter description activity" name="description"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formImage">
                        <Form.Control type="file" placeholder="Enter image file" name="image" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Control type="number" placeholder="Enter price promo " name="price"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDiscount">
                        <Form.Control type="number" placeholder="Enter discount promo " name="discount"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRating">
                        <Form.Control type="number" placeholder="Enter rating promo " name="rating"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formReview">
                        <Form.Control type="number" placeholder="Enter review promo " name="review"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFacilities">
                        <Form.Control type="text" placeholder="Enter facilities activity" name="facilities"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Control type="text" placeholder="Enter address activity" name="address"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProvince">
                        <Form.Control type="text" placeholder="Enter province activity" name="province"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCity">
                        <Form.Control type="text" placeholder="Enter city activity" name="city"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control as="textarea" rows={3} placeholder="Enter location activity" name="location"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}