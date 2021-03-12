import React from "react";
import {Container, Content, ListItem, Text} from "native-base";
import LanguageListItem from "./components/listItem/language-list-item.component";
import UnitListItem from "./components/listItem/unit-list-item.component";
import WeightListItem from "./components/listItem/weight-list-item.component";
import {withNamespaces} from "react-i18next";
import AutoCalculateListItem from "./components/listItem/auto-calculate-list-item.component";
import DailyGoalListItem from "./components/listItem/daily-goal-list-item.component";
import SexListItem from './components/listItem/sex-list-item.component';

const styles = {
    container: {
        backgroundColor: "#FFF"
    },
    subHeader: {
        color: '#1db4d6',
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 20
    }
};

const SettingComponent = ({i18n}: any) => {
    return (
        <Container style={styles.container}>
            <Content>
                <Text style={styles.subHeader}>{i18n.t('settings.selection_one.header')}</Text>
                <LanguageListItem/>
                <SexListItem />
                <UnitListItem/>
                <WeightListItem/>

                <ListItem itemDivider style={{height: 5}}/>

                <Text style={styles.subHeader}>{i18n.t('settings.selection_two.header')}</Text>
                <AutoCalculateListItem/>
                <DailyGoalListItem/>
            </Content>
        </Container>
    )
};

export default withNamespaces('')(SettingComponent)
