import React, {useState} from "react";
import {Body, Icon, Left, ListItem, Right, Text} from "native-base";
import {compose} from "recompose";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import DailyGoalPickerComponent from "../../../../components/daily-goal-picker.compomemt";
import {getDailyGoal} from "../../../registration/store/reducers/registration-reducer";
import {getAutoCalculate} from "../../store/reducers/setting.reducer";

const style = {
    disableText : {
        color: 'gray'
    },
    left: {marginEnd: 5},
    subText: {fontSize: 13, color: 'gray'}
};

const DailyGoalListItem = ({dailyGaol, autoCalculate, i18n}: any) => {
    const [isVisible, setVisible] = useState(false);
    const disable = autoCalculate ? style.disableText : {};

    return (
        <ListItem icon onPress={() => setVisible(true)} disabled={autoCalculate}>
            <Left style={style.left}>
                <Icon name="medal" type="MaterialCommunityIcons" />
            </Left>
            <Body>
                <Text style={disable}>{i18n.t('settings.selection_one.weight')}</Text>
                <Text style={style.subText}>{dailyGaol}</Text>
            </Body>
            <Right/>

            <DailyGoalPickerComponent visible={isVisible} setVisible={setVisible}/>
        </ListItem>
    )
};

export default compose(
    withNamespaces(''),
    connect(state => ({
        dailyGaol: getDailyGoal(state),
        autoCalculate: getAutoCalculate(state)
    }))
)(DailyGoalListItem);
