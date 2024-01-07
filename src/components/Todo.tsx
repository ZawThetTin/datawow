import { FC } from 'react';
import './Todo.scss';
import { Todo as TodoTypes } from '@/types/todos.types';
import { useUpdateTodoMutation } from '@/services/modules/todos';

interface Props {
	data: TodoTypes;
}

export const Todo: FC<Props> = ({ data }) => {
	const [updateTodo] = useUpdateTodoMutation();

	const handleEdit = (todo: TodoTypes) => {
		const newTodo = {
			...todo,
			title: 'Updated',
		};
		updateTodo(newTodo);
	};

	return (
		<div className='todo'>
			{data.id}
			{data.title}
			<button onClick={() => handleEdit(data)}>Edit</button>
		</div>
	);
};
