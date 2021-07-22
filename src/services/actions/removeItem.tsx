import {REMOVE_ITEM} from '../../actionTypes';

export const removeItem = (id: number) =>{
    return{
        type: REMOVE_ITEM,
        id: id
    }
}