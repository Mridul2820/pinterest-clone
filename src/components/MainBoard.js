import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

const MainBoard = ({ photos }) => {
    return (
        <Wrapper>
            <Container>
                {photos && photos.map(photo => (
                    <Pin 
                        key={photo.blur_hash} 
                        url={photo.urls.regular}
                        alt={photo.alt_description}
                    />
                ))}
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 50px;
`

const Container = styled.div`
    width: 80%;
`

export default MainBoard
