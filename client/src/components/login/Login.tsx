import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Button } from "react-bootstrap";
import './Login.css'
import { Link, useLocation } from "react-router-dom";

export default function Login () {
    const location = useLocation();
    // console.log(location.pathname)
    const loginLocation = location.pathname === "/login" ? true : false
    
    return (
        <Container className="d-flex flex-column justify-content-center mt-5 w-25 p-3 border bg-light">
        <Form className="">
            {loginLocation
            ? <h2>Log In</h2>
            : <h2>Register</h2>}
            
            <Form.Group className="mb-3 mt-4" controlId="formGroupUsername">
                <InputGroup size="sm">
                <InputGroup.Text id="userIcon">
                    <FontAwesomeIcon icon={faUser} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Username" />
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <InputGroup size="sm">
                <InputGroup.Text id="passwordLockIcon">
                    <FontAwesomeIcon icon={faLock} />
                </InputGroup.Text>
                <Form.Control type="password" placeholder="Password" />
                </InputGroup>
            </Form.Group>
            <div className="d-grid gap-2">
                {loginLocation
                ?             
                <Button variant="primary" type="submit" size="sm">
                    Log In
                </Button>
                :         
                <Button variant="primary" type="submit" size="sm">
                Register
                </Button>
                }

            </div>
        </Form>
        <Container className="or-seperator"><i>or</i></Container>
        <Button variant="danger" type="submit" size="sm">
            <span className="me-2">
            <FontAwesomeIcon icon={faGoogle} />
            </span>
            {loginLocation
            ?
            <span>
                Log in with Google
            </span>
            :
            <span>
                Register with Google
            </span>
            }

        </Button>
        {loginLocation
        ?
        <Link to="/register" className="register-font mt-3">New user? Register here</Link>
        :
        <div></div>}
        </Container>
    )
}