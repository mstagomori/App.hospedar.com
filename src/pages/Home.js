import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import NavBarProfile from '../Component/NavBarProfile'
import HomeCard from '../Component/HomeCard'
import styled from 'styled-components'
import UserForm from '../Component/StatesList'


const FilterWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #222c69;
    color: white;
    border-radius: 10px;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    margin: 10px 10px 10px 10px;

    @media(min-width: 1200px) {
        max-width: 1200px;
    }
`



export default function Home(){

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    return (
        <div className="main">
            <NavBarProfile/>
            
                <div className="filter-container">
                <FilterWrapper>
                <h4>Passagens aéreas com reserva flexível</h4>
                        <form onSubmit={classe.handleSubmit}>
                            <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Origem</label>
                                <select class="form-control" value={classe.state.value} onChange={classe.handleChangeOrigin}> 
                                <option name="test" value="selecione">Selecione</option>
                                <option name="test" value="rio de janeiro">Rio de Janeiro</option>
                                <option name="test" value="são paulo">São Paulo</option>
                                <option name="test" value="recife">Recife</option>
                                <option name="test" value="fortaleza">Fortaleza</option>
                                </select>
                                </div>

                                <div class="form-group col-md-6">
                                <label for="inputPassword4">Destino</label>
                                <select class="form-control" value={classe.state.value} onChange={classe.handleChangeDestination}> 
                                <option name="test" value="selecione">Selecione</option>
                                <option name="test" value="rio de janeiro">Rio de Janeiro</option>
                                <option name="test" value="são paulo">São Paulo</option>
                                <option name="test" value="recife">Recife</option>
                                <option name="test" value="fortaleza">Fortaleza</option>
                                </select>
                                </div>

                                <div class="form-group col-md-4">
                                <label for="inputPassword4">Data Ida</label>
                                <input type="date" class="form-control" id="inputPassword4" value={classe.state.value} onChange={classe.handleChangeDataInit} />
                                </div>

                                <div class="form-group col-md-4">
                                <label for="inputPassword4">Data Volta</label>
                                <input type="date" class="form-control" id="inputPassword4" value={classe.state.value} onChange={classe.handleChangeDataEnd}/>
                                </div>

                                <div class="form-group col-md-4">
                                <label for="inputPassword4">Número de passageiros</label>
                                <select class="form-control" value={classe.state.value} onChange={classe.handleChangeNumberPassengers}> 
                                    <option name="test" value="selecione">Selecione</option>
                                    <option name="test" value="1">1</option>
                                    <option name="test" value="2">2</option>
                                    <option name="test" value="3">3</option>
                                    <option name="test" value="4">4</option>
                                    <option name="test" value="5">5</option>
                                    <option name="test" value="6">6</option>
                                    <option name="test" value="7">7</option>
                                    <option name="test" value="8">8</option>
                                </select>
                                </div>

                                {/* <div class="form-group col-md-6">
                                <label for="inputPassword4">Classe</label>
                                <select id="inputPassword4" class="form-control">
                                    <option selected>Selecione</option>
                                    <option>Primeira Classe</option>
                                    <option>Executiva</option>
                                    <option>Econômica</option>
                                </select>
                                </div> */}
                                
                            </div>
                            <div class="w-100 d-flex justify-content-end">
                                <a href="/destinations" type="submit" class="btn btn-danger">Buscar</a>
                            </div>
                        
                        </form>
                </FilterWrapper>
            </div>

            <div className="offer-container">
                <div className="offer-description-container">
                    <h6>Aproveite</h6>
                    <h3>Rio de Janeiro, a cidade maravilhosa</h3>
                </div>
                
                
                <div className="carousel-container">
                    <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                        <HomeCard key={item}>{item}</HomeCard>
                    ))}
                    </Carousel>
                </div>
            </div>
            
        </div>
        
    ) 
}

