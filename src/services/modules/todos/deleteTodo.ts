import { api } from '@/services/api';
import { TODOS_ENDPOINT } from '@/services/endpoints';
import { TODO_TAG } from '@/services/tags';
import { Todo } from '@/types/todos.types';

export const deleteTodoApi = api.injectEndpoints({
	endpoints: build => ({
		deleteTodo: build.mutation<Todo[], string>({
			query: id => {
				return {
					url: `${TODOS_ENDPOINT}/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: [TODO_TAG],
		}),
	}),
	overrideExisting: false,
});

export const { useDeleteTodoMutation } = deleteTodoApi;
