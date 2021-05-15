import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

import NavBar from '../Component/NavBar'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const LoginWrapper = styled.div`
    background-color: #fff;
    width: 350px;
    height: 410px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-radius: 5px;
    border: solid 0.2px rgba(173, 173, 173, 0.445);
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 295px;
    height: 130px;
    align-items: flex-start;
    justify-content: space-between;
`

export default function Login() {
    return (
        <Container>
            <NavBar loginVisibility="invisible"/>
            <LoginWrapper>  
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Seu email" />
                        <Form.Text className="text-muted">
                        Nós não compartilharemos seu email com ninguém.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <ButtonWrapper>
                        <Button href="/homeprofile" variant="primary" block type="submit">
                            Login
                        </Button>
                        <Button href="/register" variant="primary" block  type="submit">
                            Cadastre-se
                        </Button>
                        <Button href="/" variant="primary" block type="submit">
                            Esqueci minha senha
                        </Button>
                    </ButtonWrapper>
                </Form>
            </LoginWrapper>
        </Container>
    )
}