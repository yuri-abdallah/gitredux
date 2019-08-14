import React, { Component, Fragment } from 'react';
import Searcher from '../../components/searcher';
import Cards from '../../components/cards';
import api from '../../services/api';
import './styles.css';
//import { Z_FILTERED } from 'zlib';

class Main extends Component {

    state = {
        dados: [],
        erro: null
    };


    handleSearchRepos = async repositorio => {
        try {
            const response = await api.get(repositorio);
            this.setState({ erro: null });
            //this.setState({ dados: [...this.state.dados, response.data] });
            // console.log(this.state.dados);
            // this.state.dados.map(objeto => {
            //     console.log(objeto.id)
            // });

            const newArray = this.state.dados.find(elemento => (
                elemento.id === response.data.id
            ));

            if (newArray === undefined) {
                this.setState({ dados: [...this.state.dados, response.data] });
            } else {
                alert("Repositorio já adicionado");
            }

            // console.log(this.repo.id);

            // this.setStat({ dados: [newArray.data] });

        } catch (erro) {
            console.log("Houve um erro na api.");
            this.setState({ erro: true })
        }
    }

    joseAlfredoDaConceicao = (id) => {
        // this.setState({ clicked: true });
        // console.log(this.state.clicked);

        console.log(id);
        const newArray = this.state.dados.filter(repo => (
            id !== repo.id
        ));
        this.setState({ dados: newArray });

    }

    refreshCard = async (id) => {
        const newArray = this.state.dados.find(repo => (
            id === repo.id
        ));

        const response = await api.get(`https://api.github.com/repos/${newArray.full_name}`);

        var newArray1 = [];
        for (var i = 0; i < this.state.dados.length; i++) {
            if (this.state.dados[i].id === id) {
                newArray1[i] = response.data;
            } else {
                newArray1[i] = this.state.dados[i];
            }
        }
        console.log(newArray1);
        this.setState({ dados: newArray1 });
        console.log(this.state.dados)
    }


    render() {
        return (
            <Fragment>
                <Searcher handleClick={this.handleSearchRepos} contagem={this.state.dados.length} validacao={this.state.erro} />
                <div className="grig-cards">
                    {this.state.dados.map(repo => (
                        <Cards key={repo.id} repositorio={repo} handleClicked={this.joseAlfredoDaConceicao} atualiza={this.refreshCard} />
                    ))}
                </div>
            </Fragment >
        );
    }
}

export default Main;