import React, { useState } from 'react'
import NavBarProfile from '../Component/NavBarProfile'
import styled from 'styled-components'


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





export default function ChangeProfile() {
    return (
        <div className="main">
            <NavBarProfile/>
            
                <div className="filter-container">
                <FilterWrapper>
                    <h2>Minha Conta</h2>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Nome Completo</label>
                                <input type="text" class="form-control" id="name" placeholder="Cláudio"></input>
                                
                                </div>

                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="text" class="form-control" id="email" placeholder="claudiomiceli@poli.ufrj.br"></input>
                                </div>

                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Telefone</label>
                                <input type="text" class="form-control" id="tel" placeholder="994421492"></input>
                                </div>
                                
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Data de Nascimento</label>
                                <input type="text" class="form-control" id="date" placeholder="20/10/1990"></input>
                                </div>
                                </div>
                            </form>

                            <h2>Cartão de Crédito</h2>
                            <form>
                            <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="inputCity">Cartão</label>
                            <input type="text" class="form-control" id="inputCity"/>
                            </div>
                            <div class="form-group col-md-4">
                            <label for="inputState">Data de Validade</label>
                            <input type="text" class="form-control" id="inputZip"/>
                            </div>
                            <div class="form-group col-md-2">
                            <label for="inputZip">CVV</label>
                            <input type="text" class="form-control" id="inputZip"/>
                            </div>
                            </div>
                            <div class="w-100 d-flex justify-content-end">
                                <a href="/profile" type="submit" class="btn btn-danger">Confirmar</a>
                            </div>
                        
                        </form>
                </FilterWrapper>
            </div>
           
        </div>
    )
}