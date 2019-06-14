import {WEIGHT_PICKER_VISIBLE} from "../../../constants/action-types";

export const setWeightPickerVisible = (weightPickerVisible: boolean) => ({
    type: WEIGHT_PICKER_VISIBLE,
    payload: {weightPickerVisible}
});
