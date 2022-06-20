import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Footer () {
    return (
        <Container className="d-flex justify-content-between font mb-3">
            <span>
                By Iain McKenzie
            </span>
            <span>
                    <a href="https://github.com/iainmck29" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </span>
            <span>
                MKNZ Dive Shop
            </span>
        </Container>
    )
}