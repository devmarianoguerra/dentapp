import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'

import LogoDentappBlanco from '../assets/LogoDentappBlanco.svg'

class LoginLogo extends Component {
    state = {}

    render() {

        return (
            <Container fluid>
                <LogoDentappBlanco/>
            </Container>
        );
    }
}

export default LoginLogo;