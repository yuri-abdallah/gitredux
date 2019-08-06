import React, { Component } from 'react';
import api from "../../services/api";
import reload from "../../assets/imagens/reload.svg";  
import remove from "../../assets/imagens/remove.svg";
import './styles.css';
// import { Container } from './styles';

export default class cards extends Component {
  state={
    id: {},
    avatar: {},
    stars: {},
    language: {}, 
    forks: {},
  }


  
  componentDidMount() {
    this.loadCards();
  }

  loadCards = async () => {
    const response = await api.get(`/`)

    console.log(response);
  }

  render() {
    return (
      <form className="card-box">
        <header>
          <img alt="avatar"></img>
          <h3>react</h3>
        </header>
        <body>
          <h4>stars</h4>
          <h4>language</h4>
          <h4>forks</h4>
          <div className="box__logos">
            <img src={reload} style={{height: 25}} alt="reload-logo"></img>
            <img src={remove} style={{height: 32}} alt="remove-logo"></img>
          </div>
        </body>
      </form>
    );
  }
}
