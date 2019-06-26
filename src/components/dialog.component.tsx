import {MaterialDialog} from "react-native-material-dialog";
import React from "react";
import {whiteMode} from "../constants/color";

const {colorAccent} = whiteMode.dialog;

const Dialog = ({title, visible, onOk, onCancel, children}: any) => {
    return (
        <MaterialDialog
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            colorAccent={colorAccent}>
            {children}
        </MaterialDialog>
    )
};

export default Dialog;
