import React, { useState } from 'react';
import { compose } from "recompose";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { getImagesContainer } from "../../../store/ui/ui.reducer";
import { Body, Button, Container, Icon, Left, Right, Title } from "native-base";
import { TextField } from "react-native-material-textfield";
import { View } from "react-native";
import { getUnit } from "../../registration/store/reducers/registration-reducer";
import { Unit } from "../../../utils";

const style = {
    container: {
    },
    header: {
        height: 50,
        flexDirection: 'row',
        ailingItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
    },
    title: {
        width: 200,
    }
};

const getDefaultAmount = (unit: Unit) => unit === Unit.kg_ml ? '200' : '15';


const AddContainerComponent = ({images, unit, t}: any) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(getDefaultAmount(unit));
    const [error, setError] = useState('');

    return (
        <Container style={style.container}>
            <View style={style.header}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title style={style.title}>{t('containers.add.title')}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </View>
            <View style={style.content}>
                <TextField
                    value={name}
                    label={t('containers.add.name')}
                    onChangeText={setName}
                    error={error}
                />

                <TextField
                    value={amount}
                    label={t('containers.add.amount')}
                    onChangeText={setName}
                    error={error}
                />

            </View>
        </Container>
    )
};


export default compose(
    withNamespaces(''),
    connect(state => ({
        images: getImagesContainer(state),
        unit: getUnit(state)
    }))
)(AddContainerComponent)
