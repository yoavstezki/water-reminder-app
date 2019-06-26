import {Body, Icon, Left, ListItem, Right, Text} from "native-base";
import LanguagePiker from "../../../../components/language-picker.component";
import React, {useState} from "react";
import {compose} from "recompose";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import {getLang} from "../../store/reducers/setting.reducer";

const style = {
    left: {marginEnd: 15},
    subText: {fontSize: 13, color: 'gray'}
};

const LanguageListItem = ({lang, i18n}: any) => {
    const [isVisible, setVisible] = useState(false);

    return (
        <ListItem icon onPress={() => setVisible(true)}>
            <Left style={style.left}>
                <Icon type="FontAwesome" name="language" />
            </Left>
            <Body>
                <Text>{i18n.t(`languages.${lang}`)}</Text>
                <Text style={style.subText}>{i18n.t('settings.selection_one.languages')}</Text>
            </Body>
            <Right/>
            <LanguagePiker visible={isVisible} setVisible={setVisible}/>
        </ListItem>
    )
};

export default compose(
    withNamespaces(''),
    connect(state => ({
        lang: getLang(state)
    }))
)(LanguageListItem)
