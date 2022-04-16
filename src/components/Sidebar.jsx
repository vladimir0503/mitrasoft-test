import React from 'react';
import { Navbar, Offcanvas, Image, Container, Card, Nav, NavDropdown } from 'react-bootstrap';
import avatar from '../images/avatar.jpg'

const Sidebar = () => {
    return (
        <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                    <Image
                        src={avatar}
                        roundedCircle
                        width={80}
                        height={80}
                    />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Card>
                    <Card.Body>
                        <Card.Title>Владимир Безобразов</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <a
                                className='text-decoration-none text-reset'
                                href="mailto:vladimirbez0503@mail.ru"
                            >
                                vladimirbez0503@mail.ru
                            </a>
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
                <Nav>
                    <Nav.Link href="#action1">Галерея</Nav.Link>
                    <Nav.Link href="#action2">Обо мне</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    );
};

export default Sidebar;