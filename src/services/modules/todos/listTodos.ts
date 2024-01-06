import { api } from '@/services/api';
import { TODOS_ENDPOINT } from '@/services/endpoints';
import { TODO_TAG } from '@/services/tags';
import { Todo } from '@/types/todos.types';

export const listTodosApi = api.injectEndpoints({
	endpoints: build => ({
		getTodos: build.query<Todo[], string>({
			query: () => {
				return {
					url: `${TODOS_ENDPOINT}`,
					method: 'GET',
				};
			},
			providesTags: [TODO_TAG],
		}),
	}),
	overrideExisting: false,
});

export const { useGetTodosQuery } = listTodosApi;
