import React from 'react';
import './header.css';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props){

    return (
        <div>
            <header>
                <Navbar >
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>  
            </header>
            { props.children }
        </div>
    );
}

export default Header;