import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
    *{
        margin: 0;
        padding: 0;
        max-width: 100%;
        box-sizing: border-box;
    }

    color: ${props => props.theme.black};

    & h1{
        height: 100vh;
        width: 70%;
        margin: auto;
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