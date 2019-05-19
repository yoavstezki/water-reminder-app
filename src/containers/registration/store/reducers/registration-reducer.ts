import {createSelector} from 'reselect';
import {SET_DAILY_GOAL, SET_PAGE, SET_SEX, SET_UNIT, SET_WEIGHT} from '../../../../constants/action-types';
import {FormulaDailyGoal, getComputeDailyGoal, kgToLb, lbToKg, Sex, Unit} from '../../../../utils';

const initialState = {
    unit: Unit.kg_ml,
    weight: 64,
    sex: Sex.male,
    dailyGoal: 1600,
    page: 0,
};

export const registrationSelector = (state: any) => ({...state.registration});

export const getUnit = (state: any) => state.registration.unit;
export const getWeight = (state: any) => state.registration.weight;
export const getSex = (state: any) => state.registration.sex;
export const getPage = (state: any) => state.registration.page;

export const computeDailyGoalSelector = () => createSelector(
    [getUnit, getWeight, getSex],
    (unit, weight, sex) => getComputeDailyGoal({unit, weight, sex})
);

const registrationReducer: any = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_UNIT: {
            const {unit} = action.payload;
            let weight;

            if (unit === Unit.kg_ml) {
                weight = kgToLb(state.weight);
            } else {
                weight = lbToKg(state.weight);
            }

            const dailyGoal = getComputeDailyGoal({...state, unit, weight} as FormulaDailyGoal);

            return {...state, unit, weight, dailyGoal};
        }
        case SET_SEX: {
            const {sex} = action.payload;

            const dailyGoal = getComputeDailyGoal({...state, sex} as FormulaDailyGoal);
            return {...state, sex, dailyGoal};
        }
        case SET_WEIGHT: {

            const weight = action.payload.weight;
            const dailyGoal = getComputeDailyGoal({...state, weight});

            return {...state, weight, dailyGoal}
        }
        case SET_DAILY_GOAL: {
            return {
                ...state,
                dailyGoal: action.payload.dailyGoal,
            }
        }
        case SET_PAGE : {
            const {page} = action.payload;

            return {
                ...state,
                page
            }
        }

        default: {
            return state
        }
    }
};

export default registrationReducer;
