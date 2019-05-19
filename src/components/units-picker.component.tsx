import React from 'react';
import {withNamespaces} from "react-i18next";
import {SinglePicker} from "./single-picker.component";
import {Unit} from "../utils";
import {values} from 'lodash';

const getItems = (i18n: any) => values(Unit).map(unit => ({value: unit, label: i18n.t(`settings.units.${unit}`)}));

const UnitsPicker = (props: any) => {

    const {unit, setVisible, visible, onSelect, i18n} = props;

    const selectedItem = {value: unit, label: i18n.t(`settings.units.${unit}`)};

    return (
        <SinglePicker
            title={i18n.t('settings.selection_one.units')}
            items={getItems(i18n)}
            setVisible={setVisible}
            visible={visible}
            selectedItem={selectedItem}
            onSelect={onSelect}/>
    )
};

export default withNamespaces('')(UnitsPicker);

