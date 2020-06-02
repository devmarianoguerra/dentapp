import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { ReactComponent as BackButton } from "../assets/BackButton.svg"
import styled from 'styled-components'


import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



const HeadStyled = styled.div.attrs(props => ({
    backgroundColor: props.backgroundColor,
    color: props.color
}))`
background-color: ${props => props.backgroundColor};
color: ${props => props.color};
.Navbar{
    flex-wrap: wrap !important;
}
`


class Header extends Component {
    state = {}

    render() {
        return (
            <HeadStyled backgroundColor={this.props.backgroundColor} color={this.props.color}>

                <Navbar className={`Navbar`}>

                    <Container fluid>
                        <LinkContainer to={this.props.handleButtonPress}>
                            <Button variant="link"><BackButton /></Button>
                        </LinkContainer>
                    </Container>

                    <Container>
                        {this.props.children}
                    </Container>
                </Navbar>
            </HeadStyled>

        );
    }
}

export default Header;