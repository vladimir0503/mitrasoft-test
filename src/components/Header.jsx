import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Header = () => {
    return (
        <Navbar style={{ marginBottom: '20px' }} bg="light" expand={false}>
            <Container>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Sidebar />
            </Container>
        </Navbar>
    );
};

export default Header;