import { api } from '@/services/api';
import { TODOS_ENDPOINT } from '@/services/endpoints';
import { TODOS_LIST_TAG } from '@/services/tags';
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
			invalidatesTags: [TODOS_LIST_TAG],
		}),
	}),
});

export const { useCreateTodoMutation } = createTodoApi;
