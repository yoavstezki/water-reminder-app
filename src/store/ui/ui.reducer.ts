import {WEIGHT_PICKER_VISIBLE} from "../../constants/action-types";
import {Unit} from "../../utils";
import {createSelector} from "reselect";
import {range} from 'lodash';
import {getUnit} from "../../containers/registration/store/reducers/registration-reducer";

const initialState = {
    weightPickerVisible: false
};

export const getWeightRange = createSelector([getUnit], (unit) =>{
    const rangeNum = unit === Unit.kg_ml ?  {start: 0, end: 250} :{start: 0, end: 100};
    return range(rangeNum.start, rangeNum.end).map(num => num.toString())
});

export const getWeightPickerVisible = (state: any) => state.ui.weightPickerVisible;

export default (state = initialState, action: any) => {

    switch (action.type) {
        case WEIGHT_PICKER_VISIBLE: {
            const {weightPickerVisible} = action.payload;
            return {...state, weightPickerVisible}
        }

        default: {
            return state;
        }
    }
}
