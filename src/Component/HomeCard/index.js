import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import cardImg from '../../assets/rio-de-janeiro.png'
import styled from "styled-components";

const CardWrapper = styled.div`
    width: 18rem;
    margin-right: 15px;
    border-radius: .25rem;
    border: solid inset 0.5px rgba(173, 173, 173, 0.445);

    transition: 0.3s;

    :hover {
        box-shadow: 5px 5px 11px rgba(33,33,33,.2);
    }

    h3 {
        margin-bottom: 40px;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

class HomeCard extends React.Component {
    render() {
        return(
            <CardWrapper>
                <Card>
                    <Card.Img variant="top" src={cardImg} />
                    <Card.Body>
                        <h6>HOSPEDAGENS</h6>
                        <h3>Rio de Janeiro</h3>
                        <ButtonWrapper>
                            <Button variant="primary">
                                R$ 469
                            </Button>
                        </ButtonWrapper>
                        
                    </Card.Body>
                </Card>
            </CardWrapper>    
        )
    }
}

export default HomeCard;