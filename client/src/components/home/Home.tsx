import React, { useEffect } from "react"
import Hero from "../hero/Hero"
import Categories from "../categories/Categories"
import Products from "../products/Products"
import Container from "react-bootstrap/Container"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../login/userSlice"
import { useAppDispatch, useAppSelector } from "../../config/hooks"
import { refreshCart, selectCartID } from "../cart/cartSlice"


export default function Home () {
    const cartID = useAppSelector(selectCartID);
    const dispatch = useAppDispatch();

    const refreshCurrentCart = async () => {
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
        <Products />
        </div>

    )
}