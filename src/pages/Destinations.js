import React from 'react'
import styled from "styled-components"

import NavBar from '../Component/NavBar'
import DestinationCard from '../Component/DestinationCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
            <NavBar/>
            <DestinationsContainer>
                <DestinationCard/>
                <DestinationCard/>
                <DestinationCard/>
                <DestinationCard/>
            </DestinationsContainer>
        </Container>
    )
}