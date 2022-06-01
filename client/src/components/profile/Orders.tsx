import React from "react";
import { Container, Table } from "react-bootstrap";

export default function Orders () {
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
                    <tr>
                        <td>1</td>
                        <td>1/1/22</td>
                        <td>Completed</td>
                        <td>£100</td>
                    </tr>
                </tbody>
            </Table>

        </Container>
    )
}