import React, { Component, Fragment } from 'react';
import Searcher from '../../components/searcher';
import Cards from '../../components/cards';
import api from '../../services/api'

class Main extends Component {

    handleSearchRepos = async (repositorio) => {
        try {
            const response = await api.get(repositorio);
            console.log(response.data)
        } catch (erro) {
            console.log("Houve um erro na api.");
        }
    }


    render() {
        return (
            <Fragment>
                <Searcher handleClick={this.handleSearchRepos} />
                <Cards />
            </Fragment>
        );
    }
}

export default Main;