import React from "react";
import Card from "react-bootstrap/Card";

export default function CategoryCard (props: any) {
    return (
        <Card className="text-center" style={{ width: "8rem", }}>
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body>
                <Card.Title>{props.categoryTitle}</Card.Title>
            </Card.Body>
        </Card>
    )
}