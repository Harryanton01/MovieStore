import React, { Component } from 'react';
import { connect } from 'react-redux'
import Currency from '../currency/currency';
import games from '../../games';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { updateQuantity } from '../../services/actions/updateQuantity';
import { removeItem } from '../../services/actions/removeItem';
import {UpdateQuantity} from '../../types';

class Cart extends Component<any, any>{
    handleQuantity(id: number, actionId?: number ){
        let preVal = this.props.items.find((item: any) => item.id===id).quantity;
        if(actionId===1){
            preVal+=1;
            this.props.updateQuantity(id, preVal, UpdateQuantity.add);
        }
        else{
            if(preVal >=2 ){
                preVal = preVal - 1;
                this.props.updateQuantity(id, preVal, UpdateQuantity.subtract);
            }
            else{
                this.props.removeItem(id);
            }
        }
    }
    render(){         
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map((item: any)=>{
                    return(
                       <div key={item.id}>
                           {games.find((gameItem: any) => gameItem.id===item.id)?.description.title}
                           <IconButton onClick={() => this.handleQuantity(item.id)} >
                                <RemoveIcon />
                                </IconButton>
                                {item.quantity}
                            <IconButton onClick={() => this.handleQuantity(item.id, 1)}>
                                <AddIcon />
                            </IconButton>
                       </div>
                    )
                })
            ):
             (
                <p>Cart is empty...</p>
             )
       return(
        <div>
            {addedItems}
            <div style={{display:'inline-flex', fontSize: '2.4rem'}}>
                <span>
                    Total: {" "}
                </span>
                <Currency value={this.props.total} style={{paddingLeft: '10px'}}/>
            </div>
            
            <Link to={'/'} style={{display:'block'}}>
                <Button variant="contained" color="primary">
                    Back to Store
                </Button>
            </Link>
        </div>
       )
    }
}

const mapDispatchToProps = (dispatch: any) =>{
    return{
        updateQuantity: (id: number, quantity:number, action: UpdateQuantity) => {dispatch(updateQuantity(id, quantity, action))},
        removeItem: (id: number) => {dispatch(removeItem(id))},
    }
}

const mapStateToProps = (state: any)=>{
    return{
        items: state.cart.addedItems,
        total: state.cart.total
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)