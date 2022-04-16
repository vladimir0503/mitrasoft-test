import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import Sidebar from './Sidebar';

const Header = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Sidebar />
            </Container>
        </Navbar>
    );
};

export default Header;