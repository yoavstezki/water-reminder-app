import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import registrationReducer from '../containers/registration/store/reducers/registration-reducer';
import appReducer from "../store/app/app.reducer";
import settingReducer from '../containers/settings/store/reducers/setting.reducer';
import uiReducer from '../store/ui/ui.reducer';

const registrationPersistConfig = {
    key: 'registration',
    storage: storage,
};

const AppPersistConfig = {
    key: 'app',
    storage: storage,
};

const SettingPersistConfig = {
    key: 'setting',
    storage: storage
};


const rootReducer = combineReducers({
    app: persistReducer(AppPersistConfig, appReducer),
    registration: persistReducer(registrationPersistConfig, registrationReducer),
    settings: persistReducer(SettingPersistConfig, settingReducer),
    ui: uiReducer
});

export default rootReducer;




