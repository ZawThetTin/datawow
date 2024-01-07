import { useEffect } from 'react';
import { Todo } from '.';
import { useGetTodosQuery } from '../services/modules/todos';
import './ListTodos.scss';

export const ListTodos = () => {
	const { data, refetch } = useGetTodosQuery('');

	useEffect(() => {
		refetch();
	}, [refetch, data]);

	return (
		<div className='todo-list'>
			{data?.map(item => {
				return <Todo key={item.id} data={item} />;
			})}
		</div>
	);
};
