import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    background-color: #007bff;

    @media (min-width: 1400px) {
        padding-left: 250px;
    }
`

const NavWrapper = styled.div`
    max-width: 1350px;
`

class NavBarProfile extends React.Component {
    render() {
        return(
            <Header>
                <NavWrapper>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="/homeprofile">{this.props.type}</Navbar.Brand>
                        
                        <Nav className="justify-content-end w-100">
                            <Button href="/profile" variant="outline-light">Meu perfil</Button>
                        </Nav>

                        <Nav className="justify-content-end">
                            <Button href="/contactus" variant="outline-light">Fale Conosco</Button>
                        </Nav>
                            
                    </Navbar>
                </NavWrapper>
            </Header>
        )
    }
}

export default NavBarProfile;