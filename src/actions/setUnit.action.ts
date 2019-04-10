import { SET_UNIT } from '../constants/action-types';
import { Unit } from '../utils';

export const setUnit = (unit: Unit) => (
    {
        type: SET_UNIT,
        payload: { unit }
    }
);
