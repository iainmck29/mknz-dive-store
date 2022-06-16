import React, { useEffect, useState } from "react";
import { Button, Container, Dropdown, Form, Image } from "react-bootstrap";
import apiAxios from "../../config/axiosConfig";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { selectCurrentUser } from "../login/userSlice";
import styles from './Cart.module.css';
import { refreshCart, selectCartID } from "./cartSlice";

interface ProductData {
    id: number,
    merchant_id: number,
    description: string,
    price: string,
    title: string,
    img_src: string,
    price_id: string
}

type product = {
    product_id: number,
    quantity: number
}

export default function CartItem (props: product) {
    const [product, setProduct] = useState({
        id: 0,
        merchant_id: 0,
        description: '',
        price: '',
        title: '',
        img_src: '',
        price_id: ''
    })
    const dispatch = useAppDispatch()

    const cartID = useAppSelector(selectCartID);

    const productData = async () => {
        const response = await apiAxios.get<ProductData>(`/products/${props.product_id}`)
        setProduct(response.data);
    }

    const removeFromCart = async () => {
        try {
            const response = await apiAxios.delete(`/cart/${cartID}/delete/${product.id}`)
            //@ts-ignore
            await dispatch(refreshCart(cartID));
            return response
        } catch (err) {
            alert('something went wrong')
        }
    }

    useEffect(() => {
        productData();
    }, [])


    return (
        <Container className="d-flex flex-row justify-content-between align-items-center px-0 py-2 border-bottom ">
                <Image thumbnail src={product.img_src} className={`${styles.w10}`}/>
            <h5 className="my-0">{product.title}</h5>
                <span>{props.quantity}</span>
            {/* <Form>
                <Form.Select aria-label="select quantity" onChange={}>
                    <option>{props.quantity}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select>
            </Form> */}
            <Button variant="outline-danger" onClick={removeFromCart}>
                X
            </Button>
            <h5 className="my-0"></h5>

        </Container>
    )
}