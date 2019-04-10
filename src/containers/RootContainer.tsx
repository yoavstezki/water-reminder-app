import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { store } from '../store';
import RegistrationPagesContainer from './welcome/registration-pags.container'


class RootContainer extends Component {

    render(): React.ReactNode {

        const { created }: any = store.getState();

        return (
            <SafeAreaView style={style.safeArea}>
                <View style={style.applicationView}>

                    {created ? (<View>
                        bla bla bla
                    </View>) : <RegistrationPagesContainer />}


                </View>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    applicationView: {
        flex: 1
    },
});


export default RootContainer
