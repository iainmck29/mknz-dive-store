import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import apiAxios from "../../config/axiosConfig";


const Logout = () => {
    useEffect(() => {
        apiAxios.get('/logout')
    })

    return (
        <Container>
            <Alert variant="primary">You have been successfully logged out!</Alert>
        </Container>
    )
}

export default Logout