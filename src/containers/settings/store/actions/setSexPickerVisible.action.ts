import {SEX_PICKER_VISIBLE} from "../../../../constants/action-types";

export const sexPickerVisible = (sexPickerVisible: boolean) => ({
    type: SEX_PICKER_VISIBLE,
    payload: {sexPickerVisible}
});
