import * as Action from '../action/Action';

const initialState = {
    contacts : []
}

const authorReducer = (state = initialState, action) => {
    switch(action.type) {
        case Action.GET_ITEMS_CONTACT:
            return {
                    ...state,
                    contacts: Object.assign([], action.contacts)
             };

        default: return state;
    }
};

export default authorReducer;