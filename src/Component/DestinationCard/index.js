import React from 'react';
import styled from 'styled-components'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import img from '../../assets/rio-de-janeiro-empe.jpg'

const DestinationCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    border: solid 0.5px rgba(173, 173, 173, 0.645);
    justify-self: center;
    margin-bottom: 20px;
`

const ImgWrapper = styled.div`
    width: 250px;
    max-height: 320px;
    overflow: hidden;
`

const DescriptionWrapper = styled.div`
    width: 250px;
    padding: 20px;
    margin-top: 20px;

    h3 {
        margin-bottom: 20px;
    }
`

const FlightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    height: 160px;

    p {
        margin-bottom: 10px;
    }
`

class DestinationCard extends React.Component {
    render() {
        return(
                <DestinationCardWrapper>
                    <ImgWrapper>
                        <Card.Img variant="bottom" src={img} />
                    </ImgWrapper>

                    <DescriptionWrapper>
                        <h3>Rio de Janeiro</h3>
                        <DropdownButton id="dropdown-basic-button" title="Origem">
                            <Dropdown.Item href="#/action-1">Aeroporto 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Aeroporto 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Aeroporto 3</Dropdown.Item>
                        </DropdownButton>
                        <FlightWrapper>
                            <p>A partir de</p>
                            <div className="d-flex">
                                <p>R$</p>
                                <h3>469</h3>
                            </div>
                            
                            <Button size="lg" variant="danger">Buscar</Button> 
                        </FlightWrapper>
                    </DescriptionWrapper>
                    
                </DestinationCardWrapper>
        )
    }
}

export default DestinationCard;