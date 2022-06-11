import React from "react";
import { DropdownButton, Col, Container, InputGroup, Row, Table, Dropdown, Button, Form } from "react-bootstrap";
import CartItem from "./CartItem";

export default function CartPage () {
    return (
        <Container>
            <h2>Current cart</h2>
            <Row>
                <Col sm={8}>
                    <Container className="text-start">
                        <h4>Shopping cart</h4>
                        {/* render for each item in cart*/}
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />

                        {/* <Table>
                            <thead>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total price</th>
                            </thead>
                            <tbody>
                                <td>BCD</td>
                                <td>
                                    2
                                </td>
                                <td>£550</td>
                            </tbody>
                        </Table> */}
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