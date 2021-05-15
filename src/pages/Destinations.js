import React from 'react'
import styled from "styled-components"

import NavBar from '../Component/NavBar'
import DestinationCard from '../Component/DestinationCard'
import {importedAirlines} from '../Data/airlines'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`

const DestinationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    align-items:center;
`

export default function Destinations(props) {

    const { origem, destino, dataIda, dataVolta, numPassageiros } = (props.location && props.location.state) || {};

    return(
        <Container>
            <NavBar/>
            <DestinationsContainer>
                {importedAirlines.map((airline) => <DestinationCard key={airline.ID} logo={airline.logo} name={origem}/>)}
            </DestinationsContainer>
        </Container>
    )
}