import {LANGUAGE_PICKER_VISIBLE} from "../../../../constants/action-types";

export const languagePickerVisible = (languagePickerVisible: boolean) => ({
    type: LANGUAGE_PICKER_VISIBLE,
    payload: {languagePickerVisible}
});
