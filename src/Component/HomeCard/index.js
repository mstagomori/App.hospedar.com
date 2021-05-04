import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import cardImg from '../../assets/rio-de-janeiro.png'

class HomeCard extends React.Component {
    render() {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardImg} />
                <Card.Body>
                    <h6>HOSPEDAGENS</h6>
                    <h3>Rio de Janeiro</h3>
                    <p>Café da manhã</p>
                    <Button variant="primary">
                        R$ 469
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default HomeCard;