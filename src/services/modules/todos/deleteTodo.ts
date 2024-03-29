import { api } from '@/services/api';
import { TODOS_ENDPOINT } from '@/services/endpoints';
import { TODOS_LIST_TAG } from '@/services/tags';
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
			invalidatesTags: [TODOS_LIST_TAG],
		}),
	}),
});

export const { useDeleteTodoMutation } = deleteTodoApi;
