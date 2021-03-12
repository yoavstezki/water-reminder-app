import {Body, Icon, Left, ListItem, Right, Text} from "native-base";
import WeightPicker from "../../../../components/weight-picker.component";
import React, {useState} from "react";
import {compose} from "recompose";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import {getWeight} from "../../../registration/store/reducers/registration-reducer";

const style = {
    left: {marginEnd: 5},
    subText: {fontSize: 13, color: 'gray'}
};

const WeightListItem = ({weight, i18n}: any) => {

    const [isVisible, setVisible] = useState(false);

    return (
        <ListItem icon onPress={() => setVisible(true)}>
            <Left>
                <Icon type="FontAwesome5" name='weight' style={{width: 40}}/>
            </Left>
            <Body>
                <Text>{weight}</Text>
                <Text style={style.subText}>{i18n.t('settings.selection_one.weight')}</Text>
            </Body>
            <Right/>

            <WeightPicker visible={isVisible} setVisible={setVisible}/>
        </ListItem>
    )
};

export default compose(
    withNamespaces(''),
    connect(state => ({
        weight: getWeight(state)
    }))
)(WeightListItem)
