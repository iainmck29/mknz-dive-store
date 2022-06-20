import React from "react";
import Container from "react-bootstrap/Container";
import Details from "./Details";
import Orders from "./Orders";
import UserInfo from "./UserInfo";

export default function Profile () {
    return (
        <Container className="mb-0">
            <Details />
            <Orders />
        </Container>

    )
}