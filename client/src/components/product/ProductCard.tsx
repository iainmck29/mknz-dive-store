import React from "react";
import Card from "react-bootstrap/Card";

export default function ProductCard (props: any) {
    return (
        <Card style={{ width: "15rem"}}>
            <Card.Img src={props.imgSrc} />
            <Card.Title>{props.productTitle}</Card.Title>
            <Card.Text>{props.productDescription}</Card.Text>
        </Card>
    )
}