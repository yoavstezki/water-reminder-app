import {compose} from "recompose";
import {Body, Icon, Left, ListItem, Right, Text} from "native-base";
import UnitsPicker from "../../../../components/units-picker.component";
import React, {useState} from "react";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import {getUnit} from "../../../registration/store/reducers/registration-reducer";
import {Unit} from "../../../../utils";

const style = {
    left: {marginEnd: 15},
    subText: {fontSize: 13, color: 'gray'}
};

const UnitListItem = ({unit, i18n}: any) => {

    const [isVisible, setVisible] = useState(false);
    const getIconName = unit === Unit.kg_ml ? 'weight-kilogram' : 'weight-pound';

    return (
        <ListItem icon onPress={() => setVisible(true)}>
            <Left style={style.left}>
                <Icon type="MaterialCommunityIcons" name={getIconName}/>
            </Left>
            <Body>
                <Text>{i18n.t(`settings.units.${unit}`)}</Text>
                <Text style={style.subText}>{i18n.t('settings.selection_one.units')}</Text>
            </Body>
            <Right/>
            <UnitsPicker visible={isVisible} setVisible={setVisible}/>
        </ListItem>
    )
};

export default compose(
    withNamespaces(''),
    connect(state => ({unit: getUnit(state)}))
)(UnitListItem);
