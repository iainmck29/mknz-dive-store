import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import apiAxios from "../../config/axiosConfig";
import { useAppSelector } from "../../config/hooks";
import { selectCurrentUserID } from "../login/userSlice";
import OrderRow from "./OrderRow";

export default function Orders () {
    const [orders, setOrders] = useState([]);
    const userID = useAppSelector(selectCurrentUserID);

    const getOrders = async () => {
        const results = await apiAxios.post(`/orders/user`, {
            userID
        })
        setOrders(results.data)
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <Container className="d-flex flex-column text-start mt-5 ms-0 ps-0">
            <h5>Orders</h5>
            <Container className="or-seperator m-0 p-0"></Container>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order: any) => {
                        return <OrderRow order={order} key={order.id}/>
                    })}
                </tbody>
            </Table>

        </Container>
    )
}