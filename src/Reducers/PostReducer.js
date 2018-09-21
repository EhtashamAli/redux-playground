import {FETCH_POSTS , NEW_POST} from '../Actions/Types';

const initialState = {
    items : [],
    item : {}
};

export default (state = initialState , action) => {
    switch(action.type) {
        case FETCH_POSTS : 
            return {
                ...state,
                items : action.payload
            }
        case NEW_POST :
            return {
                ...state,
                item : action.status
            }
        default:
            return state;
    }
}