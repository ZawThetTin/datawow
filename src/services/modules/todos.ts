import { api } from '../api';
import { TODOS_ENDPOINT } from '../endpoints';
import { TODO_TAG } from '../tags';
import { Todo } from '../../types/todos.types';

export const todosApi = api.injectEndpoints({
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

export const { useGetTodosQuery } = todosApi;
