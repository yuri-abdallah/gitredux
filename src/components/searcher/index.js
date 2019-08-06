import React, { Component } from 'react';
import Logo from "../../assets/imagens/logo.svg";
import './styles.css';



export default class searcher extends Component {

  state = {
    nomeRepositorio: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      inputfield: "no value"
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleClick(this.state.nomeRepositorio);

  }

  render() {
    return (
      <div className="searcher-box" height="60px" width="60px" >
        <div className="box__formHeader">
          <div className="box__formTitle">
            <img src={Logo} style={{ height: 30 }} alt="git-logo"></img>
            <strong>Repositórios</strong>
          </div>
          <span>
            <strong>4</strong>
          </span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="box__inputButton">
            <input placeholder="facebook/github" onChange={event => this.setState({ nomeRepositorio: event.target.value })}></input>
            <button type='submit'>ADD</button>
          </div>
        </form>
      </div>
    );
  }
}