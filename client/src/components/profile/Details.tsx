import React, { FormEvent, useEffect, useState } from "react";
import { InputGroup, Container, Row, Col, Form, Button, FormLabel, Alert } from "react-bootstrap";
import { setConstantValue } from "typescript";
import apiAxios from "../../config/axiosConfig";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { fetchCurrentUser, selectCurrentUser } from "../login/userSlice";
import style from "./Details.module.css"

export default function Details () {
    const currentUser = useAppSelector(selectCurrentUser);
    const { id, first_name, last_name, address1, address2, postcode, city } = currentUser
    const dispatch = useAppDispatch()
    const [updated, setUpdated] = useState(false);

    const [formData, setFormData] = useState({
        first_name,
        last_name,
        address1,
        address2,
        postcode,
        city
    })

    useEffect(() => {
        setFormData({
            first_name,
            last_name,
            address1,
            address2,
            postcode,
            city
        })
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await apiAxios.put(`/users/${id}`, {
                first_name: formData.first_name,
                last_name: formData.last_name,
                address1: formData.address1,
                address2: formData.address2,
                postcode: formData.postcode,
                city: formData.city
            }, 
            {withCredentials: true})
            
            //@ts-ignore
            dispatch(fetchCurrentUser(id))
            setUpdated(true);
        } catch (error) {
            console.log(error)
        }
    }

    //@ts-ignore
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value })
    }

    return (
        <Container className="d-flex flex-column text-start mt-4">
            <h2>My details</h2>
            <Container className="d-flex flex-column space-between mt-5 ms-0 ps-0">
                <h5>Delivery Information</h5>
                <Container className="or-seperator m-0 p-0"></Container>
                <Row>
                    <Col>
                        <p className="mt-3 text-end">Update your delivery information as necessary.</p>
                    </Col>
                    <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="first_name" className="mt-3">
                            <FormLabel>First Name</FormLabel>
                            <Form.Control type="text" defaultValue={formData.first_name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="last_name" className="mt-4">
                            <FormLabel>Last Name</FormLabel>
                            <Form.Control type="text" defaultValue={formData.last_name} onChange={handleChange} />
                        </Form.Group>
                        {/* <Form.Group controlId="email" className="mt-4">
                            <FormLabel>Email</FormLabel>
                            <Form.Control type="text" defaultValue={formData.email} onChange={handleChange} />
                        </Form.Group> */}
                        <Form.Group controlId="address1" className="mt-4">
                            <FormLabel>Address Line 1</FormLabel>
                            <Form.Control type="text" defaultValue={formData.address1} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="address2" className="mt-4">
                            <FormLabel>Address Line 2</FormLabel>
                            <Form.Control type="text" defaultValue={formData.address2} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="postcode" className="mt-4">
                            <FormLabel>Postcode</FormLabel>
                            <Form.Control type="text" defaultValue={formData.postcode} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="city" className="mt-4">
                            <FormLabel>City</FormLabel>
                            <Form.Control type="text" defaultValue={formData.city} onChange={handleChange} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" className="mt-4" size="sm">
                            Save
                        </Button>
                        </div>
                        {updated &&
                        <Container className={style.successAlert}>
                        <Alert variant="success">
                            Successfully Updated Delivery Information
                        </Alert>
                        </Container>
                        }
                    </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


        </Container>
    )
}