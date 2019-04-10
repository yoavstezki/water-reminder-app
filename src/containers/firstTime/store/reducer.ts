//@ts-ignore
import { composeReducers, makeReducer } from 'redux-toolbelt'
import { Sex, Unit } from '../../../utils/app.util';
import { setDailyGoal, setFirstTime, setSex, setUnit, setWeight } from './actions';

export default composeReducers({
    isFirstTime: makeReducer(setFirstTime, { defaultState: { value: true } }),
    unit: makeReducer(setUnit, { defaultState: { value: Unit.kg_ml } }),
    weight: makeReducer(setWeight, { defaultState: { value: '64' } }),
    sex: makeReducer(setSex, { defaultState: { value: Sex.male } }),
    dailyGoal: makeReducer(setDailyGoal, { defaultState: { value: '1600' } })
})
