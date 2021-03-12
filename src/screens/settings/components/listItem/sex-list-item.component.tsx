import React from 'react';
import {compose} from "recompose";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import {getSex} from "../../../registration/store/reducers/registration-reducer";
import {Body, Icon, Left, ListItem, Right, Text} from "native-base";
import SexSwitch from '../../../../components/sex-switch.component';

const style = {
    left: {marginEnd: 15},
    subText: {fontSize: 13, color: 'gray'},
};


const SexListItem = ({sex, i18n}: any) => {
    return (
        <ListItem icon>
            <Left style={style.left}>
                <Icon name="human-male-male" type="MaterialCommunityIcons"/>
            </Left>
            <Body>
                <Text>{sex}</Text>
                <Text style={style.subText}>{i18n.t('settings.selection_one.sex')}</Text>
            </Body>
            <Right>
                <SexSwitch/>
            </Right>
        </ListItem>
    )
};

export default compose(
    withNamespaces(''),
    connect(state => ({
        sex: getSex(state)
    }), dispatch => ({}))
)(SexListItem);
