import { Unit } from "../../utils";
import { createSelector } from "reselect";
import { range } from 'lodash';
import { getUnit } from "../../screens/registration/store/reducers/registration-reducer";

const initialState = {
    images: [
        { path: 'water-icon.png', selected: true },
        { path: 'milk-icon.png', selected: false },
        { path: 'coffee-icon.png', selected: false },
        { path: 'tea-icon.png', selected: false },
        { path: 'cola-icon.png', selected: false },
        { path: 'orange-icon.png', selected: false },
        { path: 'beer-icon.png', selected: false }
    ]
};

const getRange = (rangeNum: any) => {
    return range(rangeNum.start, rangeNum.end).map(num => num.toString());
};

export const getWeightRange = createSelector([getUnit], (unit) =>{
    const rangeNum = unit === Unit.kg_ml ?  {start: 0, end: 250} :{start: 0, end: 100};
    return getRange(rangeNum)
});

export const getImagesContainer = (state: any) => state.ui.images;

export default (state = initialState, action: any) => {

    switch (action.type) {

        default: {
            return state;
        }
    }
}
