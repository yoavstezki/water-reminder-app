import {SET_CREATED} from "../../constants/action-types";

const initialState = {
    created: false
};

export const appSelector = (state: any) => ({...state.root});


const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CREATED: {
            return {
                ...state,
                created: true
            }
        }

        default: {
            return state;
        }
    }
};


export default appReducer;



