import React, { useEffect } from "react";
import { DropdownButton, Col, Container, InputGroup, Row, Table, Dropdown, Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import CartItem from "./CartItem";
import { selectCartID, selectCurrentCart } from "./cartSlice";

type cartProduct = {
    product_id: string,
    quantity: string
}

export default function CartPage () {
    const cartProducts = useAppSelector(selectCurrentCart)


    useEffect(() => {
        //@ts-ignore
        // dispatch(fetchCurrentCart(cartID))
    }, [])


    return (
        <Container>
            <h2>Current cart</h2>
            <Row>
                <Col sm={8}>
                    <Container className="text-start">
                        <h4>Shopping cart</h4>
                        {cartProducts?.map((cartProduct: any) => {
                            return <CartItem product_id={cartProduct.product_id} quantity={cartProduct.quantity} key={cartProduct.product_id} />
                        })}
                    </Container>
                </Col>
                <Col sm={4}>
                    <Container>
                        <Form action="http://localhost:9000/api/checkout">
                        <Button variant="primary" type="submit" formMethod="post">SEND</Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}