import React from 'react';
import {compose} from "recompose";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import SwitchListItem from "./switch-list-item.component";
import {getAutoCalculate} from "../../store/reducers/setting.reducer";
import {setAutoCalculate} from "../../store/actions";

const AutoCalculateListItem = ({autoCalculate, setAutoCalculate, i18n}: any) => {
    return <SwitchListItem
        title={i18n.t('settings.selection_two.autoCalculate.title')}
        subTitle={i18n.t('settings.selection_two.autoCalculate.subTitle')}
        checked={autoCalculate}
        onPress={setAutoCalculate}/>
};

export default compose(
    withNamespaces(''),
    connect(state => ({
        autoCalculate: getAutoCalculate(state)
    }), dispatch => ({
        setAutoCalculate: () => dispatch(setAutoCalculate())
    }))
)(AutoCalculateListItem);
