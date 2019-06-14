import {MaterialDialog} from "react-native-material-dialog";
import React from "react";
import SliderComponent from "./slider.component";

interface SliderPickerProps {
    title: string;
    value: string;
    visible: boolean;
    setVisible: Function;
    onChange: Function;
    minimumValue: number;
    maximumValue: number;
    step: number;
}

const SliderPicker = ({value, title, visible, setVisible, onChange, minimumValue, maximumValue, step}: SliderPickerProps) => (
    <MaterialDialog
        title={title}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}>
        <SliderComponent
            value={value}
            onChange={onChange}
            minimumValue={minimumValue}
            maximumValue={maximumValue}
            step={step}/>
    </MaterialDialog>
);

export default SliderPicker;
