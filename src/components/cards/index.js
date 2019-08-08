import React, { Component } from 'react';
//import api from "../../services/api";
import reload from "../../assets/imagens/reload.svg";
import remove from "../../assets/imagens/remove.svg";
import './styles.css';
// import { Container } from './styles';

class cards extends Component {
  render() {
    return (
      <div className="card-box">
        <div className="card-header">
          <img alt="avatar" src={this.props.repositorio.owner.avatar_url} style={{ height: 70 }}></img>
          <h2> {this.props.repositorio.name} </h2>
          <h4> {this.props.repositorio.owner.login} </h4>
        </div>
        <div className="card-body" >
          <table>
            <tbody>
              <tr className="dif">
                <td>
                  stars
                </td>
                <td>
                  {this.props.repositorio.stargazers_count}
                </td>
              </tr>
              <tr>
                <td>
                  language
                </td>
                <td>
                  {this.props.repositorio.language}
                </td>
              </tr>
              <tr className="dif">
                <td>
                  forks
                </td>
                <td>
                  {this.props.repositorio.forks_count}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="box__logos">
            <img src={reload} style={{ height: 25 }} alt="reload-logo"></img>
            <img src={remove} style={{ height: 32 }} alt="remove-logo"></img>
          </div>
        </div>
      </div >
    );
  }
}


export default cards;