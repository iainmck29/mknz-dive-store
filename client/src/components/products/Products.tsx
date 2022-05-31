import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import ProductCard from '../product/ProductCard'
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { fetchAllProducts, selectErrorLoadingProducts, selectLoadingProducts, selectProducts } from "./productsSlice";
import Spinner from "react-bootstrap/Spinner";

export default function Products (props: any) {
    const products = useAppSelector(selectProducts);
    const isLoading = useAppSelector(selectLoadingProducts);
    const hasError = useAppSelector(selectErrorLoadingProducts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    if (hasError) {
        return (
            <p>Error loading products</p>
        )
    }

    if (isLoading) {
        return (
            <Spinner animation="grow" />
        )
    }
    return (
        <Container>
            {products.map((product: any) => {
                return <ProductCard imgSrc="snorkel.png"productTitle={product.id}/>
            })}






        </Container>
    )
}