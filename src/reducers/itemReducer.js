import { v1 as uuidv1} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuidv1(), name: 'Eggs' },
        { id: uuidv1(), name: 'Milk' },
        { id: uuidv1(), name: 'Steak' },
        { id: uuidv1(), name: 'Water' }
    ]
}

export default function foo(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS: 
        return {
            ...state
        }
        default: 
        return state;
    }
}