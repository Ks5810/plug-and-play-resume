import {FETCH_BASIC_INFO, UPDATE_BASIC_INFO} from "../actions/types";

// BasicInfo Reducer
const BasicInfoReducerDefaultState = {
    basicInfo: {}
};

export default (state = BasicInfoReducerDefaultState, action) => {
    switch (action.types) {
        case FETCH_BASIC_INFO:
            return {
                ...state,
                basicInfo: action.data
            };
        case UPDATE_BASIC_INFO:
            return {
                ...state,
                basicInfo: action.data
            };
        default:
            return state;

    }
};