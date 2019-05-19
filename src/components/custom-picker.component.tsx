import {MaterialDialog} from "react-native-material-dialog";
import React from "react";

interface CustomPickerProps {
    title: string;
}

const onOk = (value: any, setVisible: Function, onSelect: Function) => {
    setVisible(false);
    onSelect(value)
};

const CustomPicker = ({title, visible, setVisible, onSelect, children}: any) => {

    return (
        <MaterialDialog
            title={title}
            visible={visible}
            onOk={() => onOk('', setVisible, onSelect)}
            onCancel={() => setVisible(false)}>
            {children}
        </MaterialDialog>
    )
};

export default CustomPicker;
