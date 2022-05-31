import React from "react";
import Carousel from "react-bootstrap/Carousel"

export default function Hero () {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                style={{
                    maxHeight: "500px",
                    objectFit: "cover"
                }}
                src="diver.jpg" 
                alt="diver with fish"/>
            <Carousel.Caption>
                <h3>The UK's No. 1 Online Dive Store</h3>
                <p>Now with 50% off sale</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{
                    height: "500px",
                    objectFit: "cover"
                }}
                src="diverWithHood.jpg"
                alt="cold diver" />
                <Carousel.Caption>
                    <h3>Shop our cold water collection</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{
                    height: "500px",
                    objectFit: "cover"
                }}
                src="bcds.jpg"
                alt="buoyancy control devices" />
                <Carousel.Caption>
                    <h3>30% off Aqualung BCDs</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}