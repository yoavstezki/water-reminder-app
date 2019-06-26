import React from 'react';
import {Languages} from "../i18n/languages.enum";
import {withNamespaces} from "react-i18next";
import {SinglePicker} from "./single-picker.component";
import {compose} from "recompose";
import {connect} from "react-redux";
import {getLang} from "../containers/settings/store/reducers/setting.reducer";
import {setLanguage} from "../containers/settings/store/actions"

const getItems = (i18n: any) => Object.keys(Languages).map(lang => ({value: lang, label: i18n.t(`languages.${lang}`)}));

const LanguagePiker = ({language, setVisible, visible, onSelect, i18n}: any) => {
    const selectedItem = {value: language, label: language};

    return (
        <SinglePicker
            title={i18n.t('picker.languages.title')}
            items={getItems(i18n)}
            selectedItem={selectedItem}
            visible={visible}
            setVisible={setVisible}
            onSelect={onSelect}
        />
    )
};

export default compose(
    withNamespaces(''),
    connect(state => ({
        language: getLang(state)
    }), dispatch => ({
        onSelect: (lang: Languages) => dispatch(setLanguage(lang))
    }))
)(LanguagePiker);
