import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Header = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar style={{ marginBottom: '20px' }} bg="light" expand={false}>
            <Container>
                <Navbar.Toggle onClick={handleShow} />
                <Sidebar show={show} onClose={handleClose}/>
            </Container>
        </Navbar>
    );
};

export default Header;