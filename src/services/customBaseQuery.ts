import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type CustomBaseQuery = BaseQueryFn<
	{
		url: string;
		method: AxiosRequestConfig['method'];
		data?: AxiosRequestConfig['data'];
		params?: AxiosRequestConfig['params'];
	},
	unknown,
	unknown
>;

const baseQuery = (): CustomBaseQuery => async requestOpts => {
	try {
		const result = await axios({
			...requestOpts,
		});
		return { data: result.data.data };
	} catch (error) {
		const axiosError = error as AxiosError;
		return { error: axiosError.response || axiosError };
	}
};

export const customBaseQuery = baseQuery();
