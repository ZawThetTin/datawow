import { FILTER_DONE, FILTER_UNDONE } from '@/data/CONSTANTS';
import { Todo } from '@/types/todos.types';

export const filterTodos = (data: Todo[], filter: string) => {
	let todos = data || [];
	if (filter === FILTER_DONE) {
		todos = data?.filter(item => item.completed) || [];
	} else if (filter === FILTER_UNDONE) {
		todos = data?.filter(item => !item.completed) || [];
	}
	return todos;
};
