import {Icon} from "native-base";
import React from "react";
import {connect} from "react-redux";
import {getSex} from "../containers/registration/store/reducers/registration-reducer";
import {Sex} from "../utils";
import {setSex} from "../containers/registration/store/actions";
import {whiteMode} from '../constants/color';

const {active, notActive } = whiteMode.switch;

const style = {
    switch: {fontSize: 30, paddingLeft: -30},
    active: {color: active.color},
    notActive: {color: notActive.color}
};

const getStyle = (selectedSex: Sex, sex: Sex) => selectedSex === sex ? style.active : style.notActive;

const SexSwitchComponent = ({sex, onSetSex}: any) => {
    return (
        <>
            <Icon
                style={{...style.switch, ...getStyle(sex, Sex.male)}}
                name="human-male"
                type="MaterialCommunityIcons"
                onPress={() => onSetSex(Sex.male)}/>
            <Icon
                style={{...style.switch, ...getStyle(sex, Sex.female)}}
                name="human-female"
                type="MaterialCommunityIcons"
                onPress={() => onSetSex(Sex.female)}/>
        </>
    )
};

export default connect(
    state => ({sex: getSex(state)}),
    dispatch => ({
        onSetSex: (sex: Sex) => dispatch(setSex(sex))
    })
)(SexSwitchComponent)
