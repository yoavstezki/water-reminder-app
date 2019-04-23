import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import AppNavigator from './src/navigation/AppNavigator'
import i18next from './src/i18n';

import {I18nextProvider} from "react-i18next";
import {StyleSheet, SafeAreaView} from "react-native";


export default class App extends React.Component {

    render() {
        return (
            <I18nextProvider i18n={i18next}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <SafeAreaView style={style.safeArea}>
                            <AppNavigator/>
                        </SafeAreaView>
                    </PersistGate>
                </Provider>
            </I18nextProvider>
        );
    }
}


const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});
