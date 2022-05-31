import React from "react"
import Hero from "../hero/Hero"
import Categories from "../categories/Categories"
import Products from "../products/Products"
import Container from "react-bootstrap/Container"


export default function Home () {
    return (
        <div>
        <Hero />
        <Categories />
        <Products />
        </div>

    )
}