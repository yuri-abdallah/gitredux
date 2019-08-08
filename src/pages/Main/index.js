import React, { Component, Fragment } from 'react';
import Searcher from '../../components/searcher';
import Cards from '../../components/cards';
import api from '../../services/api';
import './styles.css';

class Main extends Component {

    state = {
        dados: [],
        erro: null
    };


    handleSearchRepos = async repositorio => {
        try {
            const response = await api.get(repositorio);
            this.setState({ erro: null })
            this.setState({ dados: [...this.state.dados, response.data] })

        } catch (erro) {
            console.log("Houve um erro na api.");
            this.setState({ erro: true })
        }
    }


    render() {
        return (
            <Fragment>
                <Searcher handleClick={this.handleSearchRepos} contagem={this.state.dados.length} validacao={this.state.erro} />
                <div className="grig-cards">
                    {this.state.dados.map(repo => (
                        <Cards key={repo.id} repositorio={repo} />
                    ))}
                </div>
            </Fragment>
        );
    }
}

export default Main;