import { FC } from 'react';
import './Todo.scss';
import { Todo as TodoTypes } from '@/types/todos.types';
import {
	useDeleteTodoMutation,
	useUpdateTodoMutation,
} from '@/services/modules/todos';

interface Props {
	data: TodoTypes;
}

export const Todo: FC<Props> = ({ data }) => {
	const [updateTodo] = useUpdateTodoMutation();
	const [deleteTodo] = useDeleteTodoMutation();

	const handleEdit = (todo: TodoTypes) => {
		const newTodo = {
			...todo,
			title: 'Updated',
		};
		updateTodo(newTodo);
	};

	const handleDelete = (id: string) => {
		deleteTodo(id);
	};

	return (
		<div className='todo'>
			{data.id}
			{data.title}
			<button onClick={() => handleEdit(data)}>Edit</button>
			<button onClick={() => handleDelete(data.id)}>Delete</button>
		</div>
	);
};
