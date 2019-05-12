import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import AppNavigator from './src/navigation/AppNavigator'

import {StyleSheet, SafeAreaView} from "react-native";

// persistor.purge();


export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <SafeAreaView style={style.safeArea}>
                        <AppNavigator/>
                    </SafeAreaView>
                </PersistGate>
            </Provider>
        );
    }
}


const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});
