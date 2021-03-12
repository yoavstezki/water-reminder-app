import React, { useState } from 'react';
import { compose } from "recompose";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { getDailyGoal } from "../screens/registration/store/reducers/registration-reducer";
import { setDailyGoal } from "../screens/registration/store/actions";
import { TextField } from "react-native-material-textfield";
import Dialog from "./dialog.component";

const DailyGoalPicker = ({dailyGoal, setVisible, visible, setDailyGoal, t}: any) => {

    const [value, setValue] = useState(dailyGoal);
    const [error, setError] = useState('');

    const onOk = () => {
        if (value) {
            setVisible(false);
            setDailyGoal(value);
        } else {
            setError('required')
        }
    };

    return (
        <Dialog
            title={t('picker.dailyGoal.title')}
            visible={visible}
            onOk={onOk}
            onCancel={() => setVisible(false)}>
            <TextField
                value={`${value}`}
                label={t('picker.dailyGoal.title')}
                onChangeText={setValue}
                keyboardType={'numeric'}
                error={error}
            />
        </Dialog>
    );
};

export default compose(
    withNamespaces(''),
    connect(
        state => ({dailyGoal: getDailyGoal(state)}),
        dispatch => ({
            setDailyGoal: (value: string) => dispatch(setDailyGoal(value))
        }))
)(DailyGoalPicker)


