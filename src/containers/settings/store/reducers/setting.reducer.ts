import {SET_LANGUAGE, SET_LANGUAGE_SUCCESS} from "../../../../constants/action-types";
import {Languages} from "../../../../i18n/languages.enum";
import i18next from "../../../../i18n";
import {store} from "../../../../store";
import {setLanguageSuccess} from "../actions/set-language.action";


const changeLanguage = (lng: Languages) => {
    i18next.changeLanguage(lng)
        .then(() => store.dispatch(setLanguageSuccess(lng)))
        .catch(e => console.log(e));
};


const initialState = {
    lng: i18next.language || Languages.EN
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
            return {
                ...state,
                lng: lng
            }
        }
        default: {
            return state
        }
    }
}


export default settingReducer;
