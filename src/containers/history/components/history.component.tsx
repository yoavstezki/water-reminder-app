import React from 'react';
import {Text} from "react-native";
import {Container} from "native-base";
import SliderPicker from "../../../components/slider-picker.component";

const HistoryComponent = (props: any) => {

    return (
        <Container>
            <Text>History Page</Text>
            <SliderPicker/>
        </Container>
    )
};


export default HistoryComponent;
