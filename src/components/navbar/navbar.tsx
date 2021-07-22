import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { updateCurrency } from '../../services/actions/updateCurrency';
import { Currencies } from '../../types';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { StyledDiv, Title } from './styles';

class Navbar extends React.Component<any, any> {
    handleChange(value: Currencies){
        this.props.updateCurrency(value);
    }
    render(){
        return(
            <StyledDiv>
                <Grid container spacing={0}>
                    <Grid item md={2} lg={2}>
                        <Title variant="body1">
                            Games
                        </Title>
                    </Grid>
                    <Grid item md={7} lg={8}></Grid>
                    <Grid item md={2} lg={1}>
                    <Link to="/cart">
                        <IconButton>
                            <Badge badgeContent={this.props.addedItems.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                            <span style={{color: '#14F1AF', paddingLeft:10}}>
                                CHECKOUT
                            </span>
                        </IconButton>
                    </Link>
                    </Grid>
                    <Grid item md={1} lg={1}>
                        <Select
                            native
                            variant="outlined"
                            value={this.props.currency}
                            onChange={(e: any) => this.handleChange(e.target.value)}
                        >
                            <option value={Currencies.dollars} style={{color: '#1E2131'}}>USD ($)</option>
                            <option value={Currencies.pounds} style={{color: '#1E2131'}}>GBP (£)</option>
                        </Select>
                    </Grid>
                </Grid>
            </StyledDiv>
        );
    }
}

const mapDispatchToProps = (dispatch: any) =>{
    return{
        updateCurrency: (currency: Currencies) => {dispatch(updateCurrency(currency))}
    }
}

const mapStateToProps = (state:any) =>{
    return{
        currency: state.currency.currency,
        addedItems: state.cart.addedItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
