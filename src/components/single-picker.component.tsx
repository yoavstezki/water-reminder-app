import {SinglePickerMaterialDialog} from "react-native-material-dialog";
import React from "react";
import {whiteMode} from "../constants/color";

interface Item {
    value: string;
    label: string;
}

interface SinglePickerProps {
    title: string;
    items: Item[];
    selectedItem: Item;
    setVisible: Function;
    visible: boolean;
    onSelect: Function;
}

const {colorAccent} = whiteMode.dialog;

const onOk = ({selectedItem: {value}}: any, setVisible: Function, onSelect: Function) => {
    setVisible(false);
    console.log('value', value);
    onSelect(value);
};


export const SinglePicker = ({title, items, selectedItem, visible, setVisible, onSelect}: SinglePickerProps) => {
    return (
        <SinglePickerMaterialDialog
            title={title}
            items={items}
            visible={visible}
            selectedItem={selectedItem}
            onCancel={() => setVisible(false)}
            onOk={(result: any) => onOk(result, setVisible, onSelect)}
            colorAccent={colorAccent}
        />
    )
};
