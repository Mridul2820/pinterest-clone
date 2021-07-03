import React from 'react'
import styled from 'styled-components'

const Pin = ({ url, alt }) => {
    return (
        <Wrapper>
            <Container>
                <img src={url} alt={alt} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 236px;

    img {
        width: 100%;
        display: flex;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }
`

export default Pin
