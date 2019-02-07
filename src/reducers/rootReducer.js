import {FILTER_BY_NEW} from "../actions/filterAction";

const initialState = {
    filterByNew: false
};

export default function filterReducer(state = initialState, { type }) {
    switch(type){
        case FILTER_BY_NEW:
            return {
                ...state,
                filterByNew: true
            };
        default:
            return state;
    }
}