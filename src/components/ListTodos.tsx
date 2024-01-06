import { useEffect } from 'react';
import { Todo } from '.';
import { useGetTodosQuery } from '../services/modules/todos';
import './ListTodos.scss';

export const ListTodos = () => {
	const { data, refetch } = useGetTodosQuery('');

	useEffect(() => {
		refetch();
		console.log({ data });
	}, [refetch, data]);

	return (
		<div className='todo-list'>
			{JSON.stringify(data)}
			<Todo />
			<Todo />
			<Todo />
		</div>
	);
};
