import { SET_PAGE } from '../../../../constants/action-types';

export const sexPage = (page: number) => (
    {
        type: SET_PAGE,
        payload: { page }
    }
);
