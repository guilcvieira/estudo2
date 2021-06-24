

// import React from 'react';

import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ApplicationState } from '../../store'
import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoryActions from '../../store/ducks/repositories/actions'

interface StateProps {
    repositories: Repository[]
}

interface DispathProps {
    loadRequest(): void
}

type Props = StateProps & DispathProps

class RepositoryList extends Component<Props> {

    componentDidMount() {
        const { loadRequest } = this.props

        loadRequest()
    }

    render() {
        const { repositories } = this.props
        return (
            <div>
                <ul>
                    {repositories.map(repository => (
                        <li key={repository.id}>{repository.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoryActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)