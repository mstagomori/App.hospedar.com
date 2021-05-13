import React, { useState } from 'react'
import NavBarProfile from '../Component/NavBarProfile'
import HomeCard from '../Component/HomeCard'
import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    background-color: #007bff;

    @media (min-width: 1400px) {
        padding-left: 250px;
    }
`

const FilterWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #222c69;
    color: white;
    border-radius: 10px;
    padding: 30px;
    font-family: 'Roboto', sans-serif;
    margin: 10px 10px 10px 10px;

    @media(min-width: 1200px) {
        max-width: 1200px;
    }
`

export default function ContactUs () {

    return (
        <div className="main">
            <Header>
                <NavBarProfile/>
            </Header>
            
            <div className="filter-container">
                <FilterWrapper> 
                    <h4> Bem-vindo à nossa Central de Atendimento</h4>

                    <h5>
                        
                    <br></br>
                    Aqui você pode resolver seus problemas de um jeito simples e rápido. 
                    <br></br>
                    
                    <form>
                   
                    <div class="form-group">
                        <label for="exampleFormControlSelect1"><br></br>Motivo:</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>Selecione</option>
                        <option>Alterar meus dados cadastrais</option>
                        <option>Troca de voos</option>
                        <option>Cancelamento de voos</option>
                        </select>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Telefone</label>
                    <input type="telefone" class="form-control" id="telNumber" placeholder="" required/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" class="form-control" id="inputAddress"  placeholder="" required/>
                </div>
                <div class="form-group">
                <label for="validationTextarea">Detalhamento do Problema</label>
                    <textarea class="form-control" id="validationTextarea" placeholder="" required></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">Cidade</label>
                    <input type="text" class="form-control" id="city" placeholder="Por favor, preencha essa sessão." required/>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">Estado</label>
                    <input type="text" class="form-control" id="state" placeholder="Por favor, preencha essa sessão." required/>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">CEP</label>
                    <input type="text" class="form-control" id="zip" placeholder="Por favor, preencha essa sessão." required/>
                    </div>
                </div>

                    
                    <div class="w-100 d-flex justify-content-end">
                        <button onClick={() => alert("Muito obrigado por nos contactar. Entraremos em contato em breve.")}>
                            Confirmar
                        </button>
                    </div>
                    </form>
                    

                    </h5>

                    <h7> Fale conosco: 0800 773 3838</h7>
                    <h7> Email: atendimento@hospedagem.com</h7>
                    
                </FilterWrapper>
            </div>

            
        </div>
    )
}