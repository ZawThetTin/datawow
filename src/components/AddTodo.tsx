import { FormEvent, useRef, useState } from 'react';

import {
	useCreateTodoMutation,
	useGetTodosQuery,
} from '@/services/modules/todos';

import './AddTodo.scss';
import { Input } from '@/components/Input';

export const AddTodo = () => {
	const { refetch } = useGetTodosQuery('');
	const [createTodo] = useCreateTodoMutation();
	const [title, setTitle] = useState('');
	const formRef = useRef<HTMLFormElement>(null);

	const handleChangeTitle = (e: FormEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	};

	const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await createTodo({
			id: crypto.randomUUID(),
			title,
			completed: false,
		});
		refetch();
		setTitle('');
	};

	return (
		<form ref={formRef} onSubmit={handleAddTodo}>
			<Input onChange={handleChangeTitle} value={title} showSubmitBtn={false} />
		</form>
	);
};
