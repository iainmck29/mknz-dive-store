import React, { useEffect } from "react";
import { DropdownButton, Col, Container, InputGroup, Row, Table, Dropdown, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import CartItem from "./CartItem";
import { selectCartID, selectCurrentCart } from "./cartSlice";

type cartProduct = {
    product_id: string,
    quantity: string
}

export default function CartPage () {
    const cartProducts = useAppSelector(selectCurrentCart)
    const navigate = useNavigate()

    const navigateCheckout = () => {
        navigate('/checkout')
    }




    return (
        <Container>
            <h2 className="header">Current cart</h2>
            <Row>
                <Col sm={8}>
                    <Container className="text-start">
                        <Table striped bordered>
                <thead>
                    <tr>
                        <th style={{width: "15%"}}>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {cartProducts?.map((cartProduct: any) => {
                            return <CartItem product_id={cartProduct.product_id} quantity={cartProduct.quantity} key={cartProduct.product_id} />
                        })}
                </tbody>
            </Table>

                    </Container>
                </Col>
                <Col sm={4}>
                    <Container>
                        <Button variant="primary" onClick={navigateCheckout}>Checkout</Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}