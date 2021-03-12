import React, { useState } from 'react';

import { compose } from 'recompose';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { getWeight } from '../screens/registration/store/reducers/registration-reducer';
import { getWeightRange } from '../store/ui/ui.reducer';
import { setWeight } from '../screens/registration/store/actions';
//@ts-ignore
import { WheelPicker } from 'react-native-wheel-picker-android';
import { MaterialDialog } from "react-native-material-dialog";

const WeightPicker = ({weight, weightRange, visible, setWeight, setVisible, t}: any) => {

    const [value, setValue] = useState(weight);

    const onOk = () => {
        setVisible(false);
        setWeight(value);
    };

    return (
        <MaterialDialog
            title={t('picker.weight.title')}
            visible={visible}
            onOk={onOk}
            onCancel={() => setVisible(false)}>
            <WheelPicker
                style={{padding: 10}}
                selectedItem={`${value}`}
                data={weightRange}
                onItemSelected={setValue}/>
        </MaterialDialog>
    )
};

export default compose(
    withNamespaces(''),
    connect(state => ({
        weight: getWeight(state),
        weightRange: getWeightRange(state)
    }), dispatch => ({
        setWeight: (weight: string) => dispatch(setWeight(weight))
    }))
)(WeightPicker);
