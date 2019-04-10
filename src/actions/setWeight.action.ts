import { SET_WEIGHT } from '../constants/action-types';

export const setWeight = (weight: string) => ({
    type: SET_WEIGHT,
    payload: { weight }
});
