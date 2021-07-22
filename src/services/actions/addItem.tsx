import {ADD_ITEM} from '../../actionTypes';

export const addItem = (id: number, quantity: number) =>{
    return{
        type: ADD_ITEM,
        id: id,
        quantity: quantity
    }
}