import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import apiAxios from "../../config/axiosConfig";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { selectCartID, selectCartTotal, selectCurrentCart, getCartTotal } from "../cart/cartSlice";
import CheckoutItem from "./CheckoutItem";

type Product = {
    product_id: number,
    quantity: number
}

export function Checkout () {
    const cartProducts = useAppSelector(selectCurrentCart);
    const cartID = useAppSelector(selectCartID);
    const totalCost = useAppSelector(selectCartTotal);
    const dispatch = useAppDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(getCartTotal(cartID))
    }, []);

    return (
        <Container>
            <h2>Checkout</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price (£)</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map((product: Product) => {
                        return <CheckoutItem productID={product.product_id} quantity={product.quantity} key={product.product_id}/>
                    })}
                </tbody>
            </Table>
            <Container style={{marginTop: "5rem"}}>
                    Total cost: <b>£{totalCost}</b>
            </Container>
        </Container>
    )
}