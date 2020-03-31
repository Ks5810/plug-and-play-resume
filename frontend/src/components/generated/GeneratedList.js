import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import GeneratedListItems from './GeneratedListItems';
import Loading from '../utils/Loading';
import { Alert, ListGroup } from 'react-bootstrap';
import { Button, Container } from 'react-bootstrap';
import { fetchGenerated } from '../../actions/generated';
import { LinkContainer } from 'react-router-bootstrap';
import { save } from 'save-file';


class GeneratedList extends Component
{
    constructor(props)
    {
        super(props)
    }
    
    componentDidMount()
    {
        this.props.fetchGenerated();
    }
    
    render()
    {
        return (
            <>
                {
                    this.props.isLoading ? <Loading/> :
                    <ListGroup>
                        {
                            !this.props.generatedInfo.length ?
                            <Alert variant="warning">
                                You don't have any resume yet
                            </Alert> :
                            this.props.generatedInfo.map(generatedInfo => (
                                <GeneratedListItems
                                    key={ generatedInfo.id }
                                    id={ generatedInfo.id }
                                    { ...generatedInfo }
                                />
                            ))
                        }
                    </ListGroup>
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    generatedInfo: state.generated.generatedInfo,
    isLoading: state.generated.isLoading
});

export default connect(mapStateToProps, { fetchGenerated })(GeneratedList);
