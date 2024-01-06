import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.scss';
import axios from 'axios';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.ts';

axios.defaults.baseURL = import.meta.env.VITE_API;

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
