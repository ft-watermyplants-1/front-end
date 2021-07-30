import React from 'react';
import styled from 'styled-components';
import homeBackground from '../images/gallery/thumbs/02.jpg';

const HomeDiv = styled.div`
    *{
        margin: 0;
        padding: 0;
        max-width: 100%;
        box-sizing: border-box;
    }

    color: black;
    height: 95vh;
    background: url(${homeBackground}) no-repeat;
    filter: grayscale(40%);
    background-size: cover;
    display: flex;
    justify-content: center;

    & h1{
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 40%;
        color: white;
        font-size: 5rem;

        &:hover ~ & div{
            filter: grayscale(100%);
        }
    }

    & h1:hover ~ & div{
        filter: grayscale(100%);
    }
`

const Home = (props) => {
    return (
        <HomeDiv>
            <h1>Water My Plants</h1>
        </HomeDiv>
    )
}

export default Home;