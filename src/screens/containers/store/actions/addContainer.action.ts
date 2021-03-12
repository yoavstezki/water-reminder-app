import {ADD_CONTAINER} from "../../../../../constants/action-types";

export const addContainer = (container: any) => ({
    action: ADD_CONTAINER,
    payload: {container}
});
