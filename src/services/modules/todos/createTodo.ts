import { api } from '@/services/api';
import { TODOS_ENDPOINT } from '@/services/endpoints';
import { TODO_TAG } from '@/services/tags';
import { Todo } from '@/types/todos.types';

export const createTodoApi = api.injectEndpoints({
	endpoints: build => ({
		createTodo: build.mutation<Todo[], Todo>({
			query: data => {
				return {
					url: TODOS_ENDPOINT,
					method: 'POST',
					data,
				};
			},
			invalidatesTags: [TODO_TAG],
		}),
	}),
	overrideExisting: false,
});

export const { useCreateTodoMutation } = createTodoApi;
