import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components'

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function createBackButton(params) {
    return (<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.7525 1.90245L7.425 0.574951L0 7.99995L7.425 15.425L8.7525 14.0975L2.655 7.99995L8.7525 1.90245Z" fill={params}/>
    </svg>)
}

const HeadStyled = styled.div.attrs(props => ({
    backgroundColor: props.backgroundColor,
    color: props.color
}))`
background-color: ${props => props.backgroundColor};
color: ${props => props.color} !important;
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
                            <Button variant="link">{createBackButton(this.props.color)}</Button>
                        </LinkContainer>
                    </Container>

                    <Container fluid>
                        {this.props.children}
                    </Container>
                </Navbar>
            </HeadStyled>

        );
    }
}

export default Header;