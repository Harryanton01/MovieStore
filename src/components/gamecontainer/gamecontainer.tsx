import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Game from '../game/game';
import games from '../../games';

const StyledDiv = styled.div`
    color: white;
`;

const GameDiv = styled.div`
    padding-bottom:30px;
`;

class GameContainer extends React.Component<any, any> {
    render(){
        let itemList = games.map((item:any) => {
            return(
                <GameDiv key={item.id}>
                    <Game key={item.id} game={item} />
                </GameDiv>
            );
        });
        return(
            <StyledDiv>
               {itemList}
            </StyledDiv>
        );
    }
}

const mapStateToProps = (state:any) =>{
    return{
        items: state.cart.items
    }
}

export default connect(mapStateToProps)(GameContainer);