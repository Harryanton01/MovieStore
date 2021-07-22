import { Currencies } from '../../types';
import * as actionTypes from '../../actionTypes';

interface ICurrencyState {
    currency: Currencies, 
    currencyMultiplier: number
}
const initialState: ICurrencyState = {
    currency: Currencies.dollars,
    currencyMultiplier: 1
}

export default function reducer (state = initialState, action:any ) {
    switch(action.type){
        case actionTypes.UPDATE_CURRENCY:
            return{
                ...state,
                currency: action.payload.currency,
                currencyMultiplier: action.payload.currencyMultiplier
            }
        default: return state;
    }
}
