import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import apiAxios from "../../config/axiosConfig";
import { useAppDispatch } from "../../config/hooks";
import { clearCartState } from "../cart/cartSlice";
import { updateIsLoggedIn } from "../login/userSlice";


const Logout = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        apiAxios.get('/auth/logout');
        dispatch(updateIsLoggedIn(false));
        dispatch(clearCartState([]));
    })

    return (
        <Container>
            <Alert variant="primary">You have been successfully logged out!</Alert>
        </Container>
    )
}

export default Logout