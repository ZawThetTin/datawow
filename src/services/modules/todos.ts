import { api } from '../api';
import { TODOS_ENDPOINT } from '../endpoints';
import { TODO_TAG } from '../tags';
import { Todo } from '../../types/todos.types';

export const todosApi = api.injectEndpoints({
	endpoints: build => ({
		getClinics: build.query<Todo[], string>({
			query: userId => {
				return {
					url: `${TODOS_ENDPOINT}?userId=${userId}`,
					method: 'GET',
				};
			},
			providesTags: [TODO_TAG],
		}),
	}),
	overrideExisting: false,
});

export const { useGetClinicsQuery } = todosApi;
