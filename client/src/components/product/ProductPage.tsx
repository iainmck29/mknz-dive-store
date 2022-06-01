import React from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export default function ProductPage () {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <Container>
                        <Card style={{width: "100%"}}>
                            <Card.Img src="https://res.cloudinary.com/dpvyfov2o/image/upload/v1654093976/dive_store_products/BCD_scphbx.jpg" />
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <h2>Product Name</h2>
                    <h4>£20.99</h4>
                    <p className="text-start fs-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quo iusto, voluptates architecto commodi quibusdam. Dolorem, itaque. Labore quisquam et consequatur sint, nobis expedita? Quaerat est numquam saepe maiores facilis sequi et consequuntur rerum assumenda vero quisquam perferendis adipisci provident ea nemo neque ipsam nulla, consequatur, voluptatem quis. At perspiciatis consectetur aliquam itaque corrupti ullam natus facere officia! Alias hic minima sint magnam quas veniam eius fugiat illum quis? Omnis corrupti provident, ipsa, corporis quidem beatae, laudantium eveniet numquam similique quisquam odio minus. Esse, voluptatem. Dicta placeat ipsum tempora cum. Quidem voluptas iure soluta et itaque numquam distinctio recusandae esse.</p>

                    <Button variant="success" type="submit">Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    )
}