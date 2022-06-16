import React, { useState, useEffect } from "react";
import apiAxios from "../../config/axiosConfig";

interface ProductData {
    id: number,
    merchant_id: number,
    description: string,
    price: number,
    title: string,
    img_src: string,
    price_id: string
}

export default function CheckoutItem(props: any) {
    const { productID, quantity } = props;
    const [product, setProduct] = useState({
        id: 0,
        merchant_id: 0,
        description: '',
        price: 0,
        title: '',
        img_src: '',
        price_id: ''
    })

    const productData = async () => {
        const response = await apiAxios.get<ProductData>(`/products/${productID}`)
        setProduct(response.data);
    }

    useEffect(() => {
        productData();
    }, [])

    return (
        <tr>
            <td>{product.title}</td>
            <td>{quantity}</td>
            <td>{product.price * quantity}</td>
        </tr>
    )
}