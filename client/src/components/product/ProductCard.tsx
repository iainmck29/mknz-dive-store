import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../config/hooks";
import { selectCategory } from "../categories/categorySlice";
import style from "./ProductsCard.module.css"

export default function ProductCard (props: any) {
    const category = useAppSelector(selectCategory);
    const isInActiveCategory = () => {
        if (props.categories.includes(category)) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        isInActiveCategory()
    }, [category])

    if (!isInActiveCategory() && category !== "all") {
        return null;
    }

    return (
        <Link to={`/products/${props.id}`}>
            <Card className={style.productCard}>
                <Card.Img src={props.imgSrc} />
                <Card.Title>{props.productTitle}</Card.Title>
                <Card.Text>{props.productDescription}</Card.Text>
                <Card.Text>£{props.price}</Card.Text>
            </Card>
        </Link>
    )
}