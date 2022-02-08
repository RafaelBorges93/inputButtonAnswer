import React, { Component } from "react";
import './Project01.css'

import Button from "../components/Button"
import Input from "../components/Input"



export default class Project01 extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    console.log('alguma coisa');
    this.handleSubmit(event);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log('alguma coisa');
  }

  handleSubmit(event) {
    alert(`Admita ${this.state.value}, seu irmão é fera! :)`);
    event.preventDefault();
  }


  render () {
    const { value } = this.state;
    return (
      <div className="project01">
        <Input name="entrada" placeholder="Digite seu nome..." className="entrada" onChange={this.handleChange} value={value} />
        <Button name="saida" onClick={this.handleClick} label="Clique" className="saida" />
      </div>
    )
  }
}