import {SET_LANGUAGE} from "../../../../constants/action-types";
import {Languages} from "../../../../i18n/languages.enum";
import i18next from "../../../../i18n";

export const setLanguage = (lang: Languages) => {
    return (dispatch: any) => {
        i18next.changeLanguage(lang)
            .then(() => dispatch(setLanguageSuccess(lang)))
            .catch(e => console.log(e));
    };
};

export const setLanguageSuccess = (lang: Languages) => ({
    type: SET_LANGUAGE,
    payload: {lang}
});
