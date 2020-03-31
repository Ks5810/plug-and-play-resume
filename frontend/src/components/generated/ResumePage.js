import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenerated } from '../../actions/generated';
import { Container, Button } from 'react-bootstrap';
import GeneratedList from './GeneratedList';
import { LinkContainer } from 'react-router-bootstrap';

class ResumePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGenerated());
  }

  render = () => (
    <Container className='section'>
        <h2> Generated Resume </h2>
        <GeneratedList />
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapDispatchToProps)(ResumePage);
