import React, { } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { Nav } from "react-bootstrap";
import { useAppSelector } from "../../config/hooks";
import { selectCurrentUserID, selectIsLoggedIn } from "../login/userSlice";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavBar () {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const userID = useAppSelector(selectCurrentUserID);
    return (
        <Navbar bg="light" expand="lg" sticky="top" className={`font ${styles.navStyle}`}>
            <Container>
                <Navbar.Brand href="/">MKNZ Dive Shop</Navbar.Brand>
                <Nav className="justify-content-end">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={`/profile/${userID}`}>Profile</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>

                    {isLoggedIn ? 
                    <Nav.Link href="/logout">Logout</Nav.Link>
                    : <Nav.Link href="/login">Login</Nav.Link>
                    }
                    <a href="https://github.com/iainmck29/mknz-dive-store" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    )
}