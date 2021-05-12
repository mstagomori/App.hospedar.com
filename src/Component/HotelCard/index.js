import React from 'react';
import styled from 'styled-components'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import img from '../../assets/rio-de-janeiro-empe.jpg'

const HotelCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 815px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    border: solid 0.5px rgba(173, 173, 173, 0.645);
    justify-self: center;
`

const ImgWrapper = styled.div`
    width: 250px;
    max-height: 320px;
    overflow: hidden;
`

const DescriptionWrapper = styled.div`
    width: 350px;
    border-right: solid 0.5px rgba(173, 173, 173, 0.645);;
`

const PaymentWrapper = styled.div`
    width: 215px;
`

class HotelCard extends React.Component {
    render() {
        return(
                <HotelCardWrapper>
                    <ImgWrapper>
                        <Card.Img variant="bottom" src={img} />
                    </ImgWrapper>

                    <DescriptionWrapper>
                        <h1>Rio de Janeiro</h1>
                    </DescriptionWrapper>

                    <PaymentWrapper>

                    </PaymentWrapper>
                    
                </HotelCardWrapper>
        )
    }
}

export default HotelCard;