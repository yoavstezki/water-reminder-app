import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import registrationReducer from './registration-reducer';

const registrationPersistConfig = {
    key: 'registration',
    storage: storage,
}


const rootReducer = combineReducers({
    registration: persistReducer(registrationPersistConfig, registrationReducer)
});

export default rootReducer;




