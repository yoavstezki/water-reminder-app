import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootContainer from './src/containers/RootContainer';
import { persistor, store } from './src/store';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RootContainer />
                </PersistGate>
            </Provider>
        );
    }
}
