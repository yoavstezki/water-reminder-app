import {SET_LANGUAGE, SET_LANGUAGE_SUCCESS} from "../../../../constants/action-types";
import {Languages} from "../../../../i18n/languages.enum";

export const setLanguage = (lng: Languages) => ({
    type: SET_LANGUAGE,
    payload: {lng}
});

export const setLanguageSuccess = (lng: Languages) => ({
    type: SET_LANGUAGE_SUCCESS,
    payload: {lng}
});
