import React from "react";
import Container from "react-bootstrap/Container"
import CategoryCard from "../category/CategoryCard";

export default function Categories() {
    return (
        <Container>
            <h2>Categories</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <CategoryCard imgSrc="categories/bcd.png" categoryTitle="bcds"/>
            <CategoryCard imgSrc="categories/depth-gauge.png" categoryTitle="accesories" />
            <CategoryCard imgSrc="categories/diving-suit.png" categoryTitle="wetsuits" />
            <CategoryCard imgSrc="categories/oxygen-tank.png" categoryTitle="tanks" />
            <CategoryCard imgSrc="categories/fins.png" categoryTitle="fins" />
            </div>

        </Container>
    )
}
