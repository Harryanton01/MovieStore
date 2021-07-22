import {UpdateQuantity} from '../../types';
import {UPDATE_QUANTITY} from '../../actionTypes';

export const updateQuantity = (id: number, quantity: number, action: UpdateQuantity) =>{
    return{
        type: UPDATE_QUANTITY,
        id: id,
        quantity: quantity,
        action: action
    }
}