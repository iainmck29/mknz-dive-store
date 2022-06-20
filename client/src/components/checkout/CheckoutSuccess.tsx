import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { setCartID } from "../cart/cartSlice";
import { selectCurrentUserID } from "../login/userSlice";

export default function CheckoutSuccess() {
    const { orderID } = useParams()
    const userID = useAppSelector(selectCurrentUserID);
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        //@ts-ignore
        dispatch(setCartID(userID));
    })

    const navigateHome = () => {
        navigate('/');
    }
    return (
        <Container>
            <h2 className="header">Thank you for your order!</h2>
            <p>Order number: {orderID}</p>
            <Button onClick={navigateHome}>
                Return To Home
            </Button>
        </Container>
    )
}