import games from '../../games';
import { UpdateQuantity } from '../../types';
import * as actionTypes from '../../actionTypes';

interface ICartState {
    addedItems: any[],
    total: number
}
const initialState: ICartState = {
    addedItems: [],
    total:0
}

export default function reducer (state = initialState, action:any ) {
    switch(action.type){
        case actionTypes.ADD_ITEM:
            let addedItem = games.find(item => item.id===action.id);
            addedItem!.quantity=action.quantity;
            let newAddedTotal = state.total + (addedItem!.amount_usd * action.quantity);
            return{
                ...state,
                addedItems:[...state.addedItems, addedItem],
                total: newAddedTotal
            }
        case actionTypes.REMOVE_ITEM:
            let removedItem = games.find(item => item.id===action.id);
            let newArray = [...state.addedItems];
            newArray = newArray.filter((item) => {
                if(item.id !== action.id){
                    return true;
                }
                return false;
            });
            let newRemovedTotal = state.total - removedItem!.amount_usd;
            return{
                ...state,
                addedItems: newArray,
                total: newRemovedTotal
            }
        case actionTypes.UPDATE_QUANTITY:
            let item = games.find(item => item.id===action.id);
            let updatedArray = [...state.addedItems];
            updatedArray = updatedArray.map((item) =>{
                if(item.id !== action.id){
                    return item;
                }
                else{
                    return{
                        ...item,
                        quantity: action.quantity
                    }
                }
            });
            let newTotal = state.total;
            if(action.action === UpdateQuantity.add) newTotal = newTotal + item!.amount_usd;
            if(action.action === UpdateQuantity.subtract) newTotal = newTotal - item!.amount_usd;
            return{
                ...state,
                addedItems: updatedArray,
                total: newTotal
            }
        default: return state;

    }
}
