import React from 'react';
import {Container} from 'react-bootstrap';
import PropTypes from 'prop-types'
// import styled from 'styled-componets'

const center = {
    textAlign: "center"
}

export default function ItemListContainer({greeting, description}) {
    return (
        <Container justify="center">
            <h1 style={center}>{greeting}</h1>
            <p style={center}>{description}</p>
        </Container>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string,
    description: PropTypes.string
}
