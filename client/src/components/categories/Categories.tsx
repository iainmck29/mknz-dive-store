import React from "react";
import Container from "react-bootstrap/Container"
import CategoryCard from "../category/CategoryCard";
import style from "./Categories.module.css"



export default function Categories() {


    return (
        <Container>
            <h2 className="header">CATEGORIES</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <CategoryCard imgSrc="categories/bcd.png" categoryTitle="bcd"/>
            <CategoryCard imgSrc="categories/depth-gauge.png" categoryTitle="accessories" />
            <CategoryCard imgSrc="categories/diving-suit.png" categoryTitle="wetsuit" />
            <CategoryCard imgSrc="categories/oxygen-tank.png" categoryTitle="essentials" />
            <CategoryCard imgSrc="categories/fins.png" categoryTitle="fins" />
            </div>


        </Container>
    )
}
