import { FC, useEffect, useState } from 'react';
import './TodoItem.scss';
import { Todo, Todo as TodoTypes } from '@/types/todos.types';
import {
	useDeleteTodoMutation,
	useGetTodosQuery,
	useUpdateTodoMutation,
} from '@/services/modules/todos';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { Dropdown } from '@/components/Dropdown';
import { Checkbox } from '@/components/Checkbox';
import { cn } from '@/utils';

interface Props {
	data: TodoTypes;
}

export const TodoItem: FC<Props> = ({ data }) => {
	const { refetch } = useGetTodosQuery('');
	const [updateTodo] = useUpdateTodoMutation();
	const [deleteTodo] = useDeleteTodoMutation();
	const [checked, setChecked] = useState(data?.completed || false);
	const [showActions, setShowAcitons] = useState(false);

	const handleCheckToggle = async () => {
		setChecked(prevValue => !prevValue);
		const newTodo: Todo = {
			...data,
			completed: !checked,
		};
		await updateTodo(newTodo);
		refetch();
	};

	const handleEdit = async (todo: TodoTypes) => {
		const newTodo = {
			...todo,
			title: 'Updated',
			completed: checked,
		};
		await updateTodo(newTodo);
		refetch();
	};

	const handleDelete = async (id: string) => {
		await deleteTodo(id);
		refetch();
	};

	useEffect(() => {
		setChecked(data?.completed || false);
	}, [data]);

	return (
		<div className='todo'>
			<Checkbox checked={checked} onChange={handleCheckToggle} />
			<span className={cn('todo-title', checked ? 'checked' : '')}>
				{data.title}
			</span>
			<Dropdown
				show={showActions}
				setShow={setShowAcitons}
				render={
					<button
						className='todo-actions-btn'
						onClick={() => setShowAcitons(true)}>
						<EllipsisHorizontalIcon width={24} />
					</button>
				}>
				<button onClick={() => handleEdit(data)}>Edit</button>
				<button
					className='delete-todo-btn'
					onClick={() => handleDelete(data.id)}>
					Delete
				</button>
			</Dropdown>
		</div>
	);
};
