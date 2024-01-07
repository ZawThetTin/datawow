import { api } from '@/services/api';
import { TODOS_ENDPOINT } from '@/services/endpoints';
import { TODO_TAG } from '@/services/tags';
import { Todo } from '@/types/todos.types';

export const updateTodoApi = api.injectEndpoints({
	endpoints: build => ({
		updateTodo: build.mutation<Todo[], Todo>({
			query: data => {
				return {
					url: `${TODOS_ENDPOINT}/${data.id}`,
					method: 'PUT',
					data,
				};
			},
			invalidatesTags: [TODO_TAG],
		}),
	}),
	overrideExisting: false,
});

export const { useUpdateTodoMutation } = updateTodoApi;
