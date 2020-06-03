import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

class LoadingSpinner extends Component {
  state = {
    isLoading: this.props.handleShows,
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando...</span>
          </Spinner>
        )}
      </>
    );
  }
}

LoadingSpinner.propTypes = {
  handleShows: PropTypes.bool,
};

export default LoadingSpinner;
