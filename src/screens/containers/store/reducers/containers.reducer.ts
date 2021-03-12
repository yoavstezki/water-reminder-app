import { ADD_CONTAINER } from "../../../../constants/action-types";
import containers from '../data/default-container.data';

export const getContainers = (state: any) =>  state.containersManagement.containers;

const initialState = {
    containers
};

const containersReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case ADD_CONTAINER: {
            return state;
        }

        default: {
            return state
        }
    }
};

export default containersReducer;
