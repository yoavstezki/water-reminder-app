import { SET_DAILY_GOAL } from '../constants/action-types';

export const setDailyGoal = (dailyGoal: string) => ({
    type: SET_DAILY_GOAL,
    payload: { dailyGoal }
});
