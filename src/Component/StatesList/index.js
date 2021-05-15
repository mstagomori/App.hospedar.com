import React, { useState } from "react"


class statesList extends React.Component{

    constructor(props) {

        super(props);

        this.state = {valueOrigin: 'mm/dd/yyyy'};

        this.dados = ['selecione','selecione','selecione','selecione','selecione'];

    
        this.handleChangeOrigin = this.handleChangeOrigin.bind(this);
        this.handleChangeDestination = this.handleChangeDestination.bind(this);
        this.handleChangeDataInit = this.handleChangeDataInit.bind(this);
        this.handleChangeDataEnd= this.handleChangeDataEnd.bind(this);
        this.handleChangeNumberPassengers = this.handleChangeNumberPassengers.bind(this);
      }
    
      handleChangeOrigin(event) {
        this.dados[0] = event.target.value;
        console.log(this.dados)
      }

      handleChangeDestination(event) {
        this.dados[1] = event.target.value;
        console.log(this.dados)
      }

      handleChangeDataInit(event) {
        this.dados[2] = event.target.value;
        console.log(this.dados)
      }

      handleChangeDataEnd(event) {
        this.dados[3] = event.target.value;
        console.log(this.dados)
      }

      handleChangeNumberPassengers(event) {
        this.dados[4] = event.target.value;
        console.log(this.dados)
      }

}

let classe = new statesList();

export default classe;