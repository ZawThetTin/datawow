import { FC, FormEvent, useEffect, useRef, useState } from 'react';
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
import { Input } from '@/components/Input';

interface Props {
	data: TodoTypes;
}

export const TodoItem: FC<Props> = ({ data }) => {
	const { refetch } = useGetTodosQuery('');
	const [updateTodo] = useUpdateTodoMutation();
	const [deleteTodo] = useDeleteTodoMutation();
	const [checked, setChecked] = useState(data?.completed || false);
	const [showActions, setShowAcitons] = useState(false);
	const [editId, setEditId] = useState<string | null>(null);
	const [title, setTitle] = useState(data.title);
	const formRef = useRef<HTMLFormElement>(null);

	const handleCheckToggle = async () => {
		setChecked(prevValue => !prevValue);
		const newTodo: Todo = {
			...data,
			completed: !checked,
		};
		await updateTodo(newTodo);
		await refetch();
	};

	const handleChangeTitle = (e: FormEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	};

	const handleBlur = () => {
		setEditId(null);
	};

	const handleSubmitEdit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await updateTodo({
			...data,
			title,
		});
		refetch();
		setEditId(null);
	};

	const handleEdit = async (todo: TodoTypes) => {
		setShowAcitons(false);
		setEditId(todo.id);
	};

	const handleDelete = async (id: string) => {
		await deleteTodo(id);
		refetch();
	};

	useEffect(() => {
		setChecked(data?.completed || false);
	}, [data]);

	if (data?.id === editId)
		return (
			<form ref={formRef} onSubmit={handleSubmitEdit}>
				<Input
					onChange={handleChangeTitle}
					value={title}
					autofocus
					onBlur={handleBlur}
				/>
			</form>
		);

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
				<button className='edit-todo-btn' onClick={() => handleEdit(data)}>
					Edit
				</button>
				<button
					className='delete-todo-btn'
					onClick={() => handleDelete(data.id)}>
					Delete
				</button>
			</Dropdown>
		</div>
	);
};
