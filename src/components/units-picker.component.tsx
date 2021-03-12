import React from 'react';
import { withNamespaces } from "react-i18next";
import { SinglePicker } from "./single-picker.component";
import { Unit } from "../utils";
import { values } from 'lodash';
import { compose } from "recompose";
import { connect } from "react-redux";
import { getUnit } from "../screens/registration/store/reducers/registration-reducer";
import { setUnit } from "../screens/registration/store/actions";

const getItems = (i18n: any) => values(Unit).map(unit => ({value: unit, label: i18n.t(`settings.units.${unit}`)}));

const UnitsPicker = ({unit, setVisible, visible, onSelect, i18n}: any) => (
    <SinglePicker
        title={i18n.t('settings.selection_one.units')}
        items={getItems(i18n)}
        setVisible={setVisible}
        visible={visible}
        selectedItem={{value: unit, label: i18n.t(`settings.units.${unit}`)}}
        onSelect={onSelect}/>
);

export default compose(
    withNamespaces(''),
    connect(
        state => ({unit: getUnit(state)}),
        dispatch => ({
            onSelect: (unit: Unit) => dispatch(setUnit(unit))
        }))
)(UnitsPicker);

