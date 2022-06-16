import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import apiAxios from "../../config/axiosConfig";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { selectCartID, refreshCart } from "../cart/cartSlice";
import { selectCurrentUser, selectIsLoggedIn } from "../login/userSlice";

export default function ProductPage () {
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const cartID = useAppSelector(selectCartID);
    const userID = useAppSelector(selectCurrentUser).id;
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const [product, setProduct] = useState({
        id: null,
        merchant_id: null,
        description: "",
        price: "",
        title: "",
        img_src: "",
        price_id: ""
    });

    const setCurrentProduct = async () => {
        const response = await apiAxios.get(`/products/${id}`)
        setProduct(response.data);
    }

    const addToCart = async (e: any) => {
        e.preventDefault()
        if (!isLoggedIn) {
            alert('You must be logged in to add items to cart!');
            return
        }
        try {
            const response = await apiAxios.post(`/cart/add`, {
                cartID,
                productID: product.id,
                quantity: 1
            })
            if (response.status === 200) {

                //@ts-ignore
                await dispatch(refreshCart(cartID))
                alert('Item successfully added to cart');

        }

        } catch (err) {
            alert('Something went wrong. Please try again later');
        }
    }


    useEffect(() => {
        setCurrentProduct();
    }, [])
    
    if (product.id === null) {
        return (
            <Spinner animation="border"/>
        )
    }
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <Container>
                        <Card style={{width: "100%"}}>
                            <Card.Img src={product.img_src} />
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <h2>{product.title}</h2>
                    <h4>{product.price}</h4>
                    <p className="text-start fs-6">{product.description}</p>
                    <Form onSubmit={addToCart}>
                    <Button variant="success" type="submit">Add to Cart</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}