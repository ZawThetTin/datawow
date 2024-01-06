import { Todo } from '.';
import './ListTodos.scss';

export const ListTodos = () => {
	return (
		<div className='todo-list'>
			<Todo />
			<Todo />
			<Todo />
		</div>
	);
};
