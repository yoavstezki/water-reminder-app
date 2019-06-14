import React from 'react';
import {connect} from "react-redux";
import {View} from "react-native";
import {Text} from "native-base";
//@ts-ignore
import Slider from "react-native-slider";

interface SliderProps {
    value: string,
    minimumValue: number,
    maximumValue: number,
    onChange: Function,
    step: number
}


const SliderComponent = ({value, minimumValue, maximumValue, onChange, step}: SliderProps) => {
    return (
        <View style={{margin: 10}}>
            <Slider
                value={value}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                onValueChange={onChange}
                step={step}
            />
            <Text>
                Value: {value}
            </Text>
        </View>
    )
};

export default SliderComponent;
