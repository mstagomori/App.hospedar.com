import React from 'react';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

class HomeNavBar extends React.Component {
    render() {
        return(
            <>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Hospedar</Navbar.Brand>       
                    <Nav className="justify-content-end w-100">
                        <Button variant="outline-light">Iniciar Sessão</Button>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default HomeNavBar;