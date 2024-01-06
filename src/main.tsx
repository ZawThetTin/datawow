import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.scss';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API;

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
