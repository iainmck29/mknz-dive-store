import React from "react";
import Container from "react-bootstrap/Container";
import Details from "./Details";
import Orders from "./Orders";
import UserInfo from "./UserInfo";

export default function Profile () {
    return (
        // Past/current order details
        <Container className="mb-0">
            <Details />
            <UserInfo />
            <Orders />
        </Container>
        // Delivery info
    )
}