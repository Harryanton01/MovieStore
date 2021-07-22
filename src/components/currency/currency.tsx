import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import styled, { css } from "styled-components";

const StyledCurrencySymbol = styled(Typography)`
    ${(props) =>
        props.variant==="body2" &&
        css`
            font-size: 2.5rem !important;
            font-weight: 500 !important;
        `
    }
`;

 class Currency extends React.Component<any> {
    render(){
        let currencySymbol = this.props.currency === 'GBP' ?
        (  
            <StyledCurrencySymbol variant={'body2'}>
                £{parseFloat((this.props.value * this.props.currencyMultiplier).toFixed(2))}
            </StyledCurrencySymbol>
        ):

         (
            <StyledCurrencySymbol variant={'body2'}>
                {(Math.round((this.props.value * this.props.currencyMultiplier)*Math.pow(10,2))/Math.pow(10,2)).toFixed(2)}$
            </StyledCurrencySymbol>
         )
        return(
            <div>
                {currencySymbol}
            </div>
        )
    }
}

const mapStateToProps = (state:any) =>{
    return{
        currencyMultiplier: state.currency.currencyMultiplier,
        currency: state.currency.currency
    }
}

export default connect(mapStateToProps)(Currency);