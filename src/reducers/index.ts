import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import registrationReducer from '../containers/registration/store/reducers/registration-reducer';
import appReducer from "../store/app/app.reducer";

const registrationPersistConfig = {
    key: 'registration',
    storage: storage,
};

const AppPersistConfig = {
    key: 'app',
    storage: storage,
};


const rootReducer = combineReducers({
    app: persistReducer(AppPersistConfig, appReducer),
    registration: persistReducer(registrationPersistConfig, registrationReducer)
});

export default rootReducer;




