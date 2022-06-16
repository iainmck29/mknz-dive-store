import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import style from "./ProductsCard.module.css"

export default function ProductCard (props: any) {
    return (
        <Link to={`/products/${props.id}`}>
            <Card className={style.productCard}>
                <Card.Img src={props.imgSrc} />
                <Card.Title>{props.productTitle}</Card.Title>
                <Card.Text>{props.productDescription}</Card.Text>
                <Card.Text>{props.price}</Card.Text>
            </Card>
        </Link>
    )
}