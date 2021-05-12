import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const RegisterWrapper = styled.div`
    background-color: #fff;
    width: 350px;
    height: 550px;
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
    align-items: flex-start;
    justify-content: space-between;
`

export default function Login() {
    return (
        <>
            <RegisterWrapper>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="email" placeholder="Seu nome" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control type="email" placeholder="Seu sobrenome" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Seu email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirme sua senha</Form.Label>
                        <Form.Control type="password" placeholder="Confirme sua senha" />
                    </Form.Group>

                    <ButtonWrapper>
                        <Button href="/" variant="primary" type="submit">
                            Cadastre-se
                        </Button>
                    </ButtonWrapper>
                </Form>
            </RegisterWrapper>
        </>
    )
}