import {Button, Col, Container, Content, Footer, FooterTab, Row} from 'native-base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ButtonGroup, Input} from 'react-native-elements';
import {Sex, Unit} from '../../../utils';

interface RegistrationProps {
    setWeight: (weight: string) => void,
    setUnit: Function,
    setSex: Function,
    setDailyGoal: (dailyGoal: string) => void,
}

const WEIGHT_MAX_LENGTH = 4;
const DAILY_GOAL_MAX_LENGTH = 4;

const buttons = [Sex.male, Sex.female];

const RegistrationComponent = ({
                                   weight, unit, sex, dailyGoal, setWeight, setUnit, setSex,
                                   setDailyGoal, setCreated, computeDailyGoal, navigation
                               }: any) => {

    const computedDailyGoal = computeDailyGoal();

    const onSave = () => {
        setCreated();
        navigation.navigate('App');
    };

    return (
        <Container>
            <Row style={{height: '10%'}}>
                <Col>
                    <Text style={style.title}>How much water to drink?</Text>
                    <Text style={style.subTitle}>Enter your weight and sex to find out</Text>
                </Col>
            </Row>

            <Content>

                <Row style={style.row}>
                    <Input containerStyle={{width: 80}}
                           inputStyle={{textAlign: 'center'}}
                           defaultValue={`${weight}`}
                           placeholder={'Weight'}
                           maxLength={WEIGHT_MAX_LENGTH}
                           keyboardType='numeric'
                           onChangeText={setWeight}/>

                    <Button bordered info onPress={() => setUnit(unit)}
                            style={style.button}>
                        <Text style={style.textButton}>{unit}</Text>
                    </Button>
                </Row>

                <Row style={style.row}>
                    <ButtonGroup
                        onPress={() => setSex(sex)}
                        selectedIndex={buttons.indexOf(sex)}
                        buttons={buttons}
                        containerStyle={{height: 40, width: 150}}
                    />
                </Row>

                <Row style={style.row}>
                    <Input containerStyle={{width: 200}}
                           inputStyle={{fontSize: 30, textAlign: 'center'}}
                           keyboardType='numeric'
                           defaultValue={`${dailyGoal}`}
                           maxLength={DAILY_GOAL_MAX_LENGTH}
                           onChangeText={setDailyGoal}
                    />
                    <Text style={{...style.label, color: '#2d89ef'}}> {unit === Unit.kg_ml ? 'ml' : 'oz'}</Text>
                </Row>

                <Row style={style.row}>
                    <Button bordered info style={dailyGoal === computedDailyGoal ? style.disableButton : style.button}
                            onPress={() => setDailyGoal(computedDailyGoal)}>
                        <Text style={style.textButton}>Calculate</Text>
                    </Button>
                </Row>
            </Content>

            <Footer>
                <FooterTab>
                    <Button full style={style.button} onPress={onSave}>
                        <Text>Finish</Text>
                    </Button>
                </FooterTab>
            </Footer>

        </Container>
    )
};

const style = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 15,
        textAlign: 'center'
    },
    form: {
        flex: 1,
        paddingTop: 15,
        flexDirection: 'column',
    },
    label: {
        fontSize: 20,
        margin: 10,
        paddingRight: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
    },
    container: {
        flex: 1,
    },
    button: {
        width: 100,
        justifyContent: 'center'

    },
    disableButton: {
        display: 'none'
    },

    textButton: {
        color: '#2d89ef'
    }
});


export default RegistrationComponent;
