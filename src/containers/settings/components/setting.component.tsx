import React from 'react';
import {
    Body, Button, Col, Container, Content, Grid, Header, Icon, Left, ListItem, Right, Row, Separator, Text, Title
} from "native-base";
import {LanguagePiker} from "../../../components/language.component";

const styles = {
    container: {
        backgroundColor: "#FFF"
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    mb: {
        marginBottom: 15
    }
};


const rendererLanguagePiker = (props: any) => (
    <LanguagePiker selected={props.lng} setLanguages={props.setLanguages} {...props}/>
);


const SettingComponent = (props: any) => {

    console.log('PROPS', props);

    const {i18n, lng, setLanguages} = props;

    return (
        <Container style={styles.container}>
            <Content>
                <ListItem itemDivider>
                    <Text>{i18n.t('settings.selection_one.header')}</Text>
                </ListItem>

                <ListItem>
                    <Left>

                    </Left>
                    <Body>
                        <LanguagePiker selected={lng} setLanguages={setLanguages} {...props}/>
                    </Body>
                    <Right/>
                </ListItem>
            </Content>
        </Container>
    )
};


export default SettingComponent;
