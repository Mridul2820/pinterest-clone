import React from 'react'
import styled from 'styled-components'
import Pin from './Pin'

const MainBoard = ({ photos }) => {
    // console.log('photos', photos);

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
    width: 100%;
    height: 100%;
    margin-top: 15px;
`

const Container = styled.div`
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
    overflow-x: hidden;

    @media (min-width: 0px) and (max-width: 559px) {
        max-width: 236px;
        column-count: 1;
    }

    @media (min-width: 560px) and (max-width: 755px) {
        max-width: 504px;
        column-count: 2;
    }

    @media (min-width: 756px) and (max-width: 1007px) {
        max-width: 756px;
        column-count: 3;
    }

    @media (min-width: 1008px) and (max-width: 1259px) {
        max-width: 1008px;
        column-count: 4;
    }

    @media (min-width: 1260px) and (max-width: 1600px) {
        max-width: 1260px;
        column-count: 5;
    }

    @media (min-width: 1600px) {
        width: 1600px;
        column-count: 6;
    }

`

export default MainBoard
