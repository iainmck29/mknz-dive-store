import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";


export default function UserInfo () {
    return (
        <Container className="d-flex flex-column text-start mt-4">

            <Container className="d-flex flex-column space-between mt-5 ms-0 ps-0">
                <h5>User Information</h5>
                <Container className="or-seperator m-0 p-0"></Container>
                <Row>
                    <Col>
                        <p className="mt-3 text-end">Update your username and password.</p>
                    </Col>
                    <Col>
                    <Form>
                        <Form.Group controlId="username" className="mt-3">
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="password" className="mt-4">
                            <Form.Control type="password" placeholder="Password" />
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