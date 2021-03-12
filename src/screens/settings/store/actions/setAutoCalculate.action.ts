import {SET_AUTO_CALCULATE} from "../../../../constants/action-types";
import {getAutoCalculate} from "../reducers/setting.reducer";
import {setDailyGoal} from "../../../registration/store/actions";
import {getComputeDailyGoal} from "../../../../utils";

export const setAutoCalculate = () => async (dispatch: any, getState: any) => {
    await dispatch({type: SET_AUTO_CALCULATE, payload: {}});

    const state = getState();
    const autoCalculate = getAutoCalculate(state);

    if(autoCalculate){
        const dailyGoal = getComputeDailyGoal({...state.registration});
        dispatch(setDailyGoal(dailyGoal.toString()))
    }
};



