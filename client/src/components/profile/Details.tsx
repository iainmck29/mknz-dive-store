import React from "react";
import { InputGroup, Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Details () {
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
                    <Form>
                        <Form.Group controlId="firstName" className="mt-3">
                            <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                        <Form.Group controlId="lastName" className="mt-4">
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                        <Form.Group controlId="email" className="mt-4">
                            <Form.Control type="text" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="address1" className="mt-4">
                            <Form.Control type="text" placeholder="Address line 1" />
                        </Form.Group>
                        <Form.Group controlId="address2" className="mt-4">
                            <Form.Control type="text" placeholder="Address line 2" />
                        </Form.Group>
                        <Form.Group controlId="postcode" className="mt-4">
                            <Form.Control type="text" placeholder="Postcode" />
                        </Form.Group>
                        <Form.Group controlId="city" className="mt-4">
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" className="mt-4" size="sm">
                            Save
                        </Button>
                        </div>
                    </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


        </Container>
    )
}