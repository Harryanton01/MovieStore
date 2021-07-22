import axios from 'axios';
import {UPDATE_CURRENCY} from '../../actionTypes';

export const updateCurrency = (currency: any) => async (dispatch: any) =>{
    const res = await axios.get('https://api.exchangeratesapi.io/latest?base=USD');
    dispatch({
        type: UPDATE_CURRENCY,
        payload:{
            currency: currency,
            currencyMultiplier: res.data.rates[currency]
        }
    })
}