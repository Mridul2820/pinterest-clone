import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

const MainBoard = () => {
    return (
        <Wrapper>
            <Container>
                <Pin />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 50px;
`
const Container = styled.div``

export default MainBoard
