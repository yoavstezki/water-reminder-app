import React from 'react';
import {Sex} from "../utils";
import {withNamespaces} from "react-i18next";
import {SinglePicker} from "./single-picker.component";

const getItems = (i18n: any) => Object.keys(Sex).map(sex => ({value: sex, label: i18n.t(`settings.sex.${sex}`)}));

const SexPicker = ({sex, setVisible, visible, onSelect, i18n}: any) => {

    const selectedItem = {value: sex, label: i18n.t(`settings.sex.${sex}`)};

    return (
        <SinglePicker
            title={'Pick one element!'}
            items={getItems(i18n)}
            visible={visible}
            setVisible={setVisible}
            selectedItem={selectedItem}
            onSelect={onSelect}
        />
    )
};

export default withNamespaces('')(SexPicker);



