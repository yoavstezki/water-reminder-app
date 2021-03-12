import {Body, Icon, Left, ListItem, Right, Switch, Text} from "native-base";
import React from "react";

const style = {
    left: {marginEnd: 5},
    subText: {fontSize: 13, color: 'gray'}
};

const SwitchListItem = ({title, subTitle, checked, onPress}: any) => {
    return (
        <ListItem icon>
            <Left>
                <Icon type="MaterialCommunityIcons" name='auto-fix' />
            </Left>
            <Body>
                <Text>{title}</Text>
                <Text style={style.subText}>{subTitle}</Text>
            </Body>
            <Right style={{paddingEnd: 10}}>
                <Switch
                    value={checked}
                    onValueChange={onPress}
                    trackColor={{false: 'gray', true: '#1db4d6'}}
                    style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                />
            </Right>
        </ListItem>
    )
};

export default SwitchListItem;
