import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Game from '../game/game';
import games from '../../games';

const StyledDiv = styled.div`
    color: white;
`;

class GameContainer extends React.Component<any, any> {
    render(){
        let itemList = games.map((item:any) => {
            return(
                <div key={item.id} style={{paddingBottom: 30}}>
                    <Game key={item.id} game={item} />
                </div>
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