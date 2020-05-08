
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import logo from "../images/faith's corner-logo/vector/default-monochrome.svg"
import "../styles/header.css"

const NavigationBar = () => (
    <Navbar bg="light" variant="light" fixed="top" collapseOnSelect expand="lg">

        <Navbar.Brand>
            <a href="/">              
            <img
                    src={logo}
                    className="d-inline-block align-top mb-0"
                    width="200"
                    height="50"
                    alt= " Logo"
                />
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="/about" className= "nav-item">About Me</Nav.Link>
            <Nav.Link href="/contact" className="nav-item">Projects</Nav.Link>
            <Nav.Link href="/blog" className="nav-item">Blog</Nav.Link>
            <Nav.Link href="/reading_list" className="nav-item">Reading List</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
)


export default NavigationBar