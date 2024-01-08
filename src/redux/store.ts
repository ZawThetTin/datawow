import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { TODOS_SLICE, todosReducer } from '@/redux/modules';
import { api } from '@/services/api';
import * as modules from '@/services/modules';

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

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
