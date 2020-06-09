import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

class TextFeedback extends Component {
  state = {
    status: this.props.status,
  };

  render() {
    const { status } = this.state;
    return (
      <>
        {status==='success' && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando...</span>
          </Spinner>
        )}
      </>
    );
  }
}

TextFeedback.propTypes = {
  status: PropTypes.string,
};

export default TextFeedback;
