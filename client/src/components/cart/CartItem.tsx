import React from "react";
import { Button, Container, Dropdown, Form, Image } from "react-bootstrap";
import styles from './Cart.module.css';

export default function CartItem () {
    return (
        <Container className="d-flex flex-row justify-content-between align-items-center px-0 py-2 border-bottom ">
                <Image thumbnail src="products/BCD.jpg" className={`${styles.w10}`}/>
            <h5 className="my-0">Product title</h5>
            <Form>
                <Form.Select aria-label="select quantity">
                    <option>Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select>
            </Form>
            <Button variant="outline-danger">
                X
            </Button>
            <h5 className="my-0">£250</h5>

        </Container>
    )
}