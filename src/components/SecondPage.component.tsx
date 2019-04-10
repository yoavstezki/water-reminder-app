import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonGroup, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../containers/firstTime/store';
import { getDailyGoal, getSex, getUnit, getWeight, isFirstTime } from '../containers/firstTime/store';
import { Sex } from '../utils/app.util';

const MAX_LENGTH = 4;

const mapStateToProps = (state: any) => ({
    isFirstTime: isFirstTime(state),
    unit: getUnit(state),
    weight: getWeight(state),
    sex: getSex(state),
    dailyGoal: getDailyGoal(state),
});

const mapDispatchToProps = (dispatch: any) => ({ actions: bindActionCreators(actions, dispatch) });

@connect(mapStateToProps, mapDispatchToProps)
class SecondPage extends Component {

    render() {

        const { unit, weight, sex, dailyGoal, actions: { setUnit, setWeight, setSex, setDailyGoal, dailyGoalCalc } }: any = this.props;

        return (
            <>
                <Text style={style.title}>How much water to drink?</Text>
                <Text style={style.subTitle}>Enter your weight and sex to find out</Text>

                <View style={style.form}>
                    <View style={style.row}>
                        <Input containerStyle={{ width: 80 }}
                               inputStyle={{ textAlign: 'center' }}
                               defaultValue={weight.value} placeholder={'Weight'}
                               maxLength={MAX_LENGTH}
                               onChangeText={setWeight} />
                        <Button type="clear" containerStyle={{ width: 60 }}
                                title={unit.value} onPress={() => setUnit(unit.value)} />
                    </View>

                    <View style={style.row}>
                        <ButtonGroup
                            onPress={() => setSex(sex.value)}
                            selectedIndex={sex.value.index}
                            buttons={[Sex.male, Sex.female]}
                            containerStyle={{ height: 40, width: 150 }}
                        />
                    </View>

                    <View style={style.row}>
                        <Input containerStyle={{ width: 200 }}
                               inputStyle={{ fontSize: 30, textAlign: 'center' }}
                               defaultValue={dailyGoal.value}
                               onChangeText={setDailyGoal}
                        />
                        <Button type="clear" containerStyle={{ width: 60 }}
                                title={'bla'} onPress={dailyGoalCalc} />
                    </View>
                </View>
            </>
        )
    }
}


const style = StyleSheet.create({
    title: {
        fontSize: 30,
        paddingBottom: 15
    },
    subTitle: {
        fontSize: 15
    },
    form: {
        flex: 1,
        paddingTop: 15,
        flexDirection: 'column',
        width: 400,

        borderWidth: 1,
        borderColor: 'red',
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
        // borderWidth: 1,
        // borderColor: 'blue',
    }

});

export default SecondPage
