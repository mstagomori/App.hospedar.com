import React from 'react'
import styled from "styled-components"

import NavBarProfile from '../Component/NavBarProfile'
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

export default function Destinations() {
    return(
        <Container>
            <NavBarProfile/>
            <DestinationsContainer>
                {importedAirlines.map((airline) => <DestinationCard logo={airline.logo} name={airline.Nome}/>)}
            </DestinationsContainer>
        </Container>
    )
}