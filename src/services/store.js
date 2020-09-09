import { createStore } from 'redux';
import authReducer from './reducers/auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

