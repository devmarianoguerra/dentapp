import React, { Component } from 'react';

// import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

class LoadingSpinner extends Component {
    state = {
        isLoading: this.props.handleShow
    }

    render() {

        return (
            <>
                {this.state.isLoading && <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>}
                
            </>
        );
    }
}

export default LoadingSpinner;