import {UNITS_PICKER_VISIBLE} from '../../../../constants/action-types';

export const setUnitsPickerVisible = (unitsPickerVisible: boolean) => ({
        type: UNITS_PICKER_VISIBLE,
        payload: {unitsPickerVisible}
    }
);
