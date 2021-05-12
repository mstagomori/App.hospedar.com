import React from 'react'
import styled from "styled-components"

import HomeNavBar from '../Component/HomeNavBar'

import HotelCard from '../Component/HotelCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
`

const AcommodationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 25px;
    align-items:center;
`

export default function Accommodations() {
    return(
        <>
            <Container>
                <HomeNavBar/>
                <AcommodationsContainer>
                    <HotelCard/>  
                </AcommodationsContainer>
            </Container>
        </>
    )
}