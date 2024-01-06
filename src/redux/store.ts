import * as modules from '../services/modules';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { TODOS_SLICE, todosReducer } from './modules';
import { api } from '../services/api';

const persistConfig = {
	key: 'datawow',
	storage,
};

const rootReducer = combineReducers({
	[TODOS_SLICE]: todosReducer,
	[api.reducerPath]: api.reducer,
	...Object.values(modules).reduce(
		(acc, module) => ({
			...acc,
			[module.reducerPath]: module.reducer,
		}),
		{}
	),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(api.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
