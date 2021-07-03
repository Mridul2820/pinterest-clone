import React from 'react'
import styled from 'styled-components'

const Pin = () => {
    return (
        <Wrapper>
            <Container>
                <img src="https://images.unsplash.com/photo-1624916889635-13b5e92c1be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
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
