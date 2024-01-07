import { api } from '@/services/api';
import { TODOS_ENDPOINT } from '@/services/endpoints';
import { TODO_DETAILS_TAG } from '@/services/tags';
import { Todo } from '@/types/todos.types';

export const todoDetailsApi = api.injectEndpoints({
	endpoints: build => ({
		getTodoDetails: build.query<Todo, string>({
			query: id => {
				return {
					url: `${TODOS_ENDPOINT}/${id}`,
					method: 'GET',
				};
			},
			providesTags: [TODO_DETAILS_TAG],
		}),
	}),
});

export const { useGetTodoDetailsQuery } = todoDetailsApi;
