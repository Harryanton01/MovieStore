import React from 'react';
import { StyledTypography, StyledDiv } from './styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { addItem } from '../../services/actions/addItem';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import Currency from '../currency/currency';
import Chip from '@material-ui/core/Chip';

 class Game extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            quantity: 1
        }
    }
    handleClick = (id: number, quantity: number)=>{
        this.props.addItem(id, quantity);
    }
    handleQuantity(id?: number){
        if(id===1){
            let newQuantity = this.state.quantity+1;
            this.setState({
                quantity: newQuantity
            })
        }
        else{
            let newQuantity = this.state.quantity-1;
            this.setState({
                quantity: newQuantity
            })
        }
    }
    render(){
        let addGameButton = this.props.addedItems.includes(this.props.addedItems.find((item: any) => item.id===this.props.game.id)) ?
        (
            <Button variant="contained" color="primary" startIcon={<CheckIcon />} disabled>Added</Button>
        ):
        (
            <Button variant="contained" color="primary" startIcon={<AddIcon />}onClick={()=>{this.handleClick(this.props.game.id, this.state.quantity)}} disabled={this.state.quantity<=0}>Add To Basket</Button>
        )
        return(
            <StyledDiv>
                <Grid container justify="flex-start" alignItems="center" spacing={1}>
                    <Grid item md={1} style={{flexBasis: '0%', padding: 0}}>
                        <img src={this.props.game.img} alt="alt_text"/>
                    </Grid>
                    <Grid item md={2} >
                        <StyledTypography variant={"body2"} style={{paddingLeft: 30}}>
                            {"Released - "}{this.props.game.description.release_date}
                        </StyledTypography>
                        <StyledTypography variant={"body1"} style={{paddingLeft: 30}}>
                            {this.props.game.description.title}
                        </StyledTypography>
                    </Grid>
                    <Grid item md={2} style={{textAlign: "left"}}>
                        <StyledTypography variant={"body2"}>
                            {"Rating"}
                        </StyledTypography>
                        <Rating defaultValue={this.props.game.rating} readOnly={true}/>
                    </Grid>
                    <Grid item md={2} style={{textAlign: "left"}}>
                        <StyledTypography variant={"body2"} >
                            {"Tags"}
                        </StyledTypography>
                        {this.props.game.tags.map((item: any, index: any)=>{
                                return <Chip key={index} label={item} />
                        })}
                    </Grid>
                    <Grid item md={2} style={{textAlign: "left"}}>
                        <StyledTypography variant={"body2"}>
                            {"Quantity"}
                        </StyledTypography>
                        <IconButton onClick={() => this.handleQuantity()} disabled={this.state.quantity<=0}>
                            <RemoveIcon />
                        </IconButton>
                        <span style={{paddingLeft: 7, paddingRight: 7}}>
                            {this.state.quantity}
                        </span>
                        <IconButton onClick={() => this.handleQuantity(1)}>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                    <Grid item md={1} style={{textAlign: "left"}}>
                        <Currency value = {this.props.game.amount_usd} />
                    </Grid>
                    <Grid item md={2} style={{textAlign: "right"}}>
                        {addGameButton}
                    </Grid>
                </Grid>
            </StyledDiv>
        );
    }
}

const mapDispatchToProps = (dispatch: any) =>{
    return{
        addItem: (id: number, quantity:number) => {dispatch(addItem(id, quantity))}
    }
}

const mapStateToProps = (state:any) =>{
    return{
        addedItems: state.cart.addedItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);