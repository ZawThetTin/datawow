import { useEffect, useState } from 'react';
import './Progress.scss';
import { useGetTodosQuery } from '@/services/modules/todos';

export const Progress = () => {
	const { data: todos } = useGetTodosQuery('');
	const [completedCount, setCompletedCount] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let count = 0;
		const length = todos?.length || 1;
		todos?.map(todo => {
			todo.completed && count++;
		});
		setCompletedCount(count);
		setProgress((count / length) * 100);
	}, [todos]);

	return (
		<div className='progress-container'>
			<label htmlFor='todo-progress' className='progress-title'>
				Progress
			</label>
			<progress
				id='todo-progress'
				className='progress'
				max='100'
				value={progress}>
				{progress}
			</progress>
			<span className='completed-count'>
				{completedCount?.toString()} completed
			</span>
		</div>
	);
};
