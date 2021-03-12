import {SET_AUTO_CALCULATE, SET_LANGUAGE,} from "../../../../constants/action-types";
import {Languages} from "../../../../i18n/languages.enum";
import i18next from "../../../../i18n";

export const getLang = (state: any) => state.settings.lang;
export const getAutoCalculate = (state: any) => state.settings.autoCalculate;

const initialState = {
    lang: i18next.language || Languages.EN,
    autoCalculate: true
};

const settingReducer: any = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_LANGUAGE : {
            const {lang} = action.payload;
            return {...state, lang}
        }
        case SET_AUTO_CALCULATE: {
            return {...state, autoCalculate: !state.autoCalculate}
        }

        default: {
            return state
        }
    }
};


export default settingReducer;
