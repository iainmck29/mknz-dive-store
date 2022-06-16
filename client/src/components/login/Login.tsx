import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Button } from "react-bootstrap";
import './Login.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import apiAxios from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { fetchCurrentUser, updateIsLoggedIn } from "./userSlice";
import { AppDispatch } from "../../store/store";
import { selectCartID, setCartID } from "../cart/cartSlice";
import { useAppSelector } from "../../config/hooks";

type Inputs = {
    username: string,
    password: string,
  };

export default function Login () {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            username: "",
            password: ""
        }
    });
    const [loginMsg, setLoginMsg] = useState<String>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    //Determine if user is coming from login or register route
    const location = useLocation();
    const loginLocation = location.pathname === "/login" ? true : false

    const handleLogin = async (data: any) => {
    // Send login details to server
        if (loginLocation) {
            try {
                const response = await apiAxios.post(
                    '/auth/login',
                    {
                        username: data.username,
                        password: data.password
                    },
                    {withCredentials: true}
                )
                if (response.status === 200) {
                    //@ts-ignore
                    await dispatch(fetchCurrentUser(response.data.id));
                    await dispatch(updateIsLoggedIn(true));
                    //@ts-ignore
                    await dispatch(setCartID(response.data.id))
                    navigate('/');
                }
            } catch (error) {
                if (error instanceof Error) {
                    setLoginMsg(error.message);
                }
            }
        }
    // Else send registration details to server
        else {
            try {
            const response = await apiAxios.post(
                '/auth/register',
                {
                    username: data.username,
                    password: data.password
                },
                { withCredentials: true }
            )
            if (response.status === 200) {
                console.log("registered successfully")
            }
            } catch (error) {
                if (error instanceof Error) {
                    setLoginMsg(error.message)
                }
            }
        }
    }


    
    return (
        <Container className="d-flex flex-column justify-content-center mt-5 w-25 p-3 border bg-light">
            {loginMsg && <Alert variant="danger">{loginMsg}</Alert>}
        <Form onSubmit={handleSubmit(handleLogin)}>
            {loginLocation
            ? <h2>Log In</h2>
            : <h2>Register</h2>}
            
            <Form.Group className="mb-3 mt-4" controlId="username" >
                <InputGroup size="sm" >
                <InputGroup.Text id="userIcon">
                    <FontAwesomeIcon icon={faUser} />
                </InputGroup.Text>
                <Form.Control type="text"
                placeholder="Username"
                {...register("username",
                {required: "This field is required"})}/>
                </InputGroup>
            <p>{errors.username?.message}</p>
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <InputGroup size="sm">
                <InputGroup.Text id="passwordLockIcon">
                    <FontAwesomeIcon icon={faLock} />
                </InputGroup.Text>
                <Form.Control type="password"
                placeholder="Password"
                {...register("password",
                {required: "This field is required",
                minLength: {
                    value: 4,
                    message: "Please enter password of minimum 4 characters"
                }})} />
                </InputGroup>
            <p>{errors.password?.message}</p>
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
        <Button variant="danger" type="submit" size="sm" disabled title="Currently developing feature">
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