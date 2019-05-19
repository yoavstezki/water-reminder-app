import {
    LANGUAGE_PICKER_VISIBLE,
    SET_LANGUAGE,
    SET_LANGUAGE_SUCCESS,
    SEX_PICKER_VISIBLE, UNITS_PICKER_VISIBLE
} from "../../../../constants/action-types";
import {Languages} from "../../../../i18n/languages.enum";
import i18next from "../../../../i18n";
import {store} from "../../../../store";
import {setLanguageSuccess} from "../actions";


const changeLanguage = (lng: Languages) => {
    i18next.changeLanguage(lng)
        .then(() => store.dispatch(setLanguageSuccess(lng)))
        .catch(e => console.log(e));
};

export const settingsSelector = (state: any) => ({...state.settings});

const initialState = {
    lng: i18next.language || Languages.EN,
    sexPickerVisible: false,
    languagePickerVisible: false,
    unitsPickerVisible: false,
};

const settingReducer: any = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_LANGUAGE: {
            const {lng} = action.payload;
            changeLanguage(lng);
            return {
                ...state
            }

        }
        case SET_LANGUAGE_SUCCESS : {
            const {lng} = action.payload;
            return {...state, lng}
        }

        case SEX_PICKER_VISIBLE : {
            const {sexPickerVisible} = action.payload;
            return {...state, sexPickerVisible}
        }

        case LANGUAGE_PICKER_VISIBLE: {
            const {languagePickerVisible} = action.payload;
            return {...state, languagePickerVisible}
        }

        case UNITS_PICKER_VISIBLE : {
            const {unitsPickerVisible} = action.payload;
            return {...state, unitsPickerVisible}
        }

        default: {
            return state
        }
    }
};


export default settingReducer;
