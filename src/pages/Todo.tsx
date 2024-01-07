import { ListTodos, Progress } from '@/components';
import './Todo.scss';

export const Todo = () => {
	return (
		<div className='todo-container'>
			<Progress />
			<ListTodos />
		</div>
	);
};
