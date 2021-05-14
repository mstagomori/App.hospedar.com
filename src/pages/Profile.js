import React, { useState } from "react";
import NavBarProfile from "../Component/NavBarProfile";
import styled from "styled-components";

const FilterWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #222c69;
  color: white;
  border-radius: 10px;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  margin: 10px 10px 10px 10px;

  @media (min-width: 1200px) {
    max-width: 1200px;
    
  }
`;

export default function Profile() {
  return (
    <div className="main">
      <NavBarProfile />

      <div className="filter-container">
        <FilterWrapper>
          <h2>Minha Conta</h2>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Nome</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="Cláudio"
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Sobrenome</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="Miceli"
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="claudiomiceli@poli.ufrj.br"
                ></input>
              </div>

              <div class="form-group col-md-6">
                <label for="inputEmail4">Telefone</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="994421492"
                ></input>
                {/* <input type="date" class="form-control" id="inputEmail4"/> */}
              </div>

              <div class="form-group col-md-6">
                <label for="inputEmail4">Data de Nascimento</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="20/10/1990"
                ></input>
              </div>

              <div class="form-group col-md-6">
                <label for="inputPassword4">
                  Ultimos 4 digitos do Cartão de Crédito
                </label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="2312"
                ></input>
              </div>
            </div>
            <div class="w-100 d-flex justify-content-end">
              <a href="/changeprofile" type="submit" class="btn btn-danger">
                Editar
              </a>
            </div>
          </form>
          <h2>Minhas Viagens</h2>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Voo</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="XYZ"
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Horário</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="HH:MM"
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Assentos</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="B3,B4,B5"
                ></input>
              </div>

              <div class="form-group col-md-6">
                <label for="inputEmail4">Valor</label>
                <input
                  type="text"
                  readonly
                  class="form-control"
                  bg="white"
                  id="staticEmail"
                  value="R$ 500,00"
                ></input>
                {/* <input type="date" class="form-control" id="inputEmail4"/> */}
              </div>
            </div>
            <div class="w-100 d-flex justify-content-end">
              <a href="/airplane" type="submit" class="btn btn-danger">
                Alterar minha viagem
              </a>
            </div>
          </form>
        </FilterWrapper>
      </div>
    </div>
  );
}
