import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import classes from './Navbar.css';

const navbar = (props) => {
    return (
        <Navbar className="color-nav" expand="md" variant="dark">
            <Navbar.Brand href="#hamburgerMenu">
                
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>

    )
}

export default navbar;