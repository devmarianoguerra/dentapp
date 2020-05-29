import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { ReactComponent as BackButton } from "../assets/svg/BackButton.svg"


import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import './Header.css'

class Header extends Component {
    state = {}


    render() {
        return (

            <Navbar className={`Navbar bgColor-${this.props.backgroundColor}`}>

                <Container fluid>
                    <LinkContainer to={this.props.handleButtonPress}>
                        <Button variant="link"><BackButton/></Button>
                    </LinkContainer>
                </Container>

                <Container>
                    {this.props.children}
                </Container>
            </Navbar>

        );
    }
}

export default Header;