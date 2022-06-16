import React, { } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../login/userSlice";

export default function NavBar () {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MKNZ Dive store</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile/:id">Profile</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>

                    {isLoggedIn ? 
                    <Nav.Link href="/logout">Logout</Nav.Link>
                    : <Nav.Link href="/login">Login</Nav.Link>
                    }
                    
                </Nav>
            </Container>
        </Navbar>
    )
}