import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import styled from "styled-components";

import LinkButton from "../Component/LinkButton";

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
      <NavBar profileVisibility="invisible" />
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
                                <label for="inputEmail4">Valor</label>
                                <input type="text" readonly class="form-control" bg = "white" id="staticEmail" value="R$ 500,00"></input>
                                {/* <input type="date" class="form-control" id="inputEmail4"/> */}
                                </div>
                                
                            </div>
                            <div class="w-100 d-flex justify-content-end">
                                <LinkButton href="/" name="Alterar Minha Viagem"/>
                            </div>
                        
                        </form>

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
              <LinkButton href="/airplane" name="Alterar Minha Viagem" />
            </div>
          </form>
        </FilterWrapper>
      </div>
    </div>
  );
}
