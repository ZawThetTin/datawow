import { useEffect, useState } from 'react';
import { FilterTodo, TodoItem } from '.';
import { useGetTodosQuery } from '../services/modules/todos';
import { Todo } from '@/types/todos.types';
import { useSelector } from 'react-redux';
import { selectTodos } from '@/redux/modules';
import { filterTodos } from '@/helpers';
import './ListTodos.scss';

export const ListTodos = () => {
	const { activeFilter } = useSelector(selectTodos);
	const { data, refetch } = useGetTodosQuery('');
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		refetch();
		const todos = filterTodos(data || [], activeFilter);
		setTodos(todos || []);
	}, [refetch, data, activeFilter]);

	return (
		<div className='todo-list'>
			<div className='todo-list-header'>
				<h2 className='todo-list-title'>Tasks</h2>
				<FilterTodo />
			</div>
			{todos?.map(item => {
				return <TodoItem key={item.id} data={item} />;
			})}
		</div>
	);
};
