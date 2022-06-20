import React from "react";
import { parseISO } from "date-fns"

export default function OrderRow (props: any) {
    const { id, created_at ,status, total_cost } = props.order
    const formattedDate = parseISO(created_at).toString().slice(0, 15);
    const formattedStatus = (status: string) => {
        switch(status) {
            case "in_progress":
                return "In Progress";
            case "cancelled":
                return "Cancelled";
            case "delivered":
                return "Order Completed";
        }
    }


    return (
        <tr>
            <td>{id}</td>
            <td>{formattedDate}</td>
            <td>{formattedStatus(status)}</td>
            <td>£{total_cost}</td>
        </tr>
    )
}