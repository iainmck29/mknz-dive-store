import React, { useEffect, useState } from "react"
import Hero from "../hero/Hero"
import Categories from "../categories/Categories"
import Products from "../products/Products"
import Container from "react-bootstrap/Container"
import { useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "../../config/hooks"
import { refreshCart, selectCartID } from "../cart/cartSlice"
import { selectCategory } from "../categories/categorySlice"


export default function Home () {
    const cartID = useAppSelector(selectCartID);
    const dispatch = useAppDispatch();
    const category = useAppSelector(selectCategory);

    const refreshCurrentCart = async () => {
        if (!cartID) {
            return
        }
        //@ts-ignore
        return await dispatch(refreshCart(cartID));
    }
    useEffect(() => {
        refreshCurrentCart();
    })


    return (
        <div>
        <Hero />
        <Categories />
        <div className="or-seperator mt-5"></div>
        <Products />
        </div>

    )
}