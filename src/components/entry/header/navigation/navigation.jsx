import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">
                <Image src='/assets/img/navigation.png' fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#item1">Главная</Nav.Link>
                    <Nav.Link href="#item2">Кошки</Nav.Link>
                    <Nav.Link href="#item3">Коты</Nav.Link>
                    <Nav.Link href="#item4">Котята</Nav.Link>
                    <Nav.Link href="#item5">Статьи</Nav.Link>
                    <Nav.Link href="#item6">Отзывы</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#item7">Настройки</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
