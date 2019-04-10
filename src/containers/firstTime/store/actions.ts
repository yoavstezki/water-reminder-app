//@ts-ignore
import { makeActionCreator } from 'redux-toolbelt'
import { Sex, Unit } from '../../../utils/app.util';

export const setFirstTime = makeActionCreator('setFirstTime', { value: false });
export const setUnit = makeActionCreator('setUnit', (unit: Unit) => {
    if (unit != null && unit === Unit.kg_ml) {
        return { value: Unit.lb_oz };
    }
    return { value: Unit.kg_ml };

});
export const setWeight = makeActionCreator('setWeight', (weight: string) => ({ value: weight }));
export const setSex = makeActionCreator('setSex', (sex: Sex) => {
    if (sex === Sex.male) {
        return { value: Sex.female };
    }
    return { value: Sex.male };
});

export const setDailyGoal = makeActionCreator('setDailyGoal', (dailyGoal: string) => {
    return { value: dailyGoal };
});

export const dailyGoalCalc = () => (dispatch: any, getState: any) => {

    console.log('11111', dispatch);


    return {};

};
