import React, { useState } from 'react'
import {importedStates} from './../Data/states.js';
import Carousel from 'react-elastic-carousel'
import NavBar from '../Component/NavBar'
import HomeCard from '../Component/HomeCard'
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

export default function Home () {

	const [states, setStates] = useState([]);
	const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

	const breakPoints = [
		{ width: 1, itemtsToShow: 1 },
		{ width: 550, itemsToShow: 2, itemsToScroll: 1 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 }
	];
	function guessState(parcialString){
		let statesWithParcialString = [];
		importedStates.forEach(x=> { if (x["Nome"].toLowerCase().includes(parcialString))  statesWithParcialString.push(x) } )
		setStates(statesWithParcialString)
		console.log(states)
	}

	return (
		<div className="main">
		<NavBar/>

		<div className="filter-container">
		<FilterWrapper>
		<h4>Passagens aéreas com reserva flexível</h4>
		<form>
		<div class="form-row">
		<div class="form-group col-md-6">
		<label for="inputPassword3" >Origem</label>
		<input type="text" class="form-control" id="inputPassword4" onChange={event => guessState(event.target.value)}/>
		</div>
		<div class="form-group col-md-6">
		<label for="inputPassword4">Destino</label>
		<input type="text" class="form-control" id="inputPassword4"/>
		</div>
		<div class="form-group col-md-6">
		<label for="inputPassword4">Data Ida</label>
		<input type="date" class="form-control" id="inputPassword4"/>
		</div>

		<div class="form-group col-md-6">
		<label for="inputPassword4">Data Volta</label>
		<input type="date" class="form-control" id="inputPassword4"/>
		</div>

		<div class="form-group col-md-6">
		<label for="inputPassword4">Número de passageiros</label>
		<select id="inputPassword4" class="form-control">
		<option selected>Selecione</option>
		<option>1</option>
		<option>2</option>
		<option>3</option>
		<option>4</option>
		<option>5</option>
		<option>6</option>
		<option>7</option>
		<option>8</option>
		</select>
		</div>

		<div class="form-group col-md-6">
		<label for="inputPassword4">Classe</label>
		<select id="inputPassword4" class="form-control">
		<option selected>Selecione</option>
		<option>Primeira Classe</option>
		<option>Executiva</option>
		<option>Econômica</option>
		</select>
		</div>

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
