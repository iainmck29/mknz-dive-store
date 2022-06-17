import React, { FormEvent, useEffect, useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import apiAxios from "../../config/axiosConfig";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { selectCartID, selectCartTotal, selectCurrentCart, getCartTotal, clearCartState } from "../cart/cartSlice";
import CheckoutItem from "./CheckoutItem";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import { selectCurrentUser } from "../login/userSlice";
import { useNavigate } from "react-router-dom";

type Product = {
    product_id: number,
    quantity: number
}


export function Checkout () {
    const cartProducts = useAppSelector(selectCurrentCart);
    const cartID = useAppSelector(selectCartID);
    const userID = useAppSelector(selectCurrentUser).id;
    const totalCost = useAppSelector(selectCartTotal);
    const dispatch = useAppDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);

    useEffect(() => {
        //@ts-ignore
        dispatch(getCartTotal(cartID))
    }, []);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
          const fetchData = async() => {
          try {
            const response = await apiAxios.post(
              '/checkout/create-payment-intent',
              {cartID})
              setClientSecret(response.data.clientSecret)
          } catch (error) {
            console.log(error)
          }}
          fetchData()
      }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // setProcessing(true);
        const payload = await stripe?.confirmCardPayment(clientSecret, {
          payment_method: {
            //@ts-ignore
            card: elements?.getElement(CardElement)
          }
        })
        //@ts-ignore
        if (payload.error) {
          //@ts-ignore
          setError(`Payment failed ${payload.error.message}`);
          setProcessing(false);
        } else {
          setError('');
          setProcessing(false);
          setSucceeded(true);
          try {
            // Add order to orders
            const order = await apiAxios.post(`/orders/new-order`, {
                userID,
                cartID,
                cartProducts
            })
            // Clear cart
            dispatch(clearCartState(''));
            // Clear state
            setClientSecret('');
            // Navigate to success page
            //@ts-ignore
            navigate(`/checkout/${order.orderID}/success`);
          } catch(error) {
            console.log(error)
          }
        }
      }

    // Stripe styling
    const cardStyle = {
        style: {
        base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
            color: "#32325d",
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
        }
    }

    return (
        <Container>
            <h2>Checkout</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price (£)</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map((product: Product) => {
                        return <CheckoutItem productID={product.product_id} quantity={product.quantity} key={product.product_id}/>
                    })}
                </tbody>
            </Table>
            <Container style={{marginTop: "5rem"}}>
                    Total cost: <b>£{totalCost}</b>
            </Container>
            <Form onSubmit={handleSubmit}>
                <CardElement options={cardStyle} />
                <Button type="submit">
                    Submit payment
                </Button>
            </Form>
        </Container>
    )
}