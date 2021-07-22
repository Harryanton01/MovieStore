import React from 'react';
import styled from 'styled-components';
import GameContainer from '../components/gamecontainer/gamecontainer';

const StyledDiv = styled.div`
    background-color: #151829;
    color: white;
    padding: 50px;
`;

const GamePage = () => (
    <StyledDiv>
        <GameContainer />
    </StyledDiv>
);

export default GamePage;