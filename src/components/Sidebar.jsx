import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Offcanvas, Image, Card, Nav } from 'react-bootstrap';
import avatar from '../images/avatar.jpg'

const Sidebar = ({ show, onClose }) => {
    return (
        <Offcanvas
            show={show} onHide={onClose}
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
                    <Link onClick={onClose} to='/'>Галерея</Link>
                    <Link onClick={onClose} to='/aboutMe'>Обо мне</Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Sidebar;