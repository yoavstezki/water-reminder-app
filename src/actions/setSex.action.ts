import { SET_SEX } from '../constants/action-types';

export const setSex = (sex: any) => ({
    type: SET_SEX,
    payload: { sex }
});
