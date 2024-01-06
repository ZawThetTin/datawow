import { useCreateTodoMutation } from '@/services/modules/todos';
import './AddTodo.scss';

export const AddTodo = () => {
	const [createTodo] = useCreateTodoMutation();

	const handleAddTodo = () => {
		createTodo({ id: crypto.randomUUID(), title: 'hi', completed: false });
	};

	return (
		<button className='add-todo' onClick={handleAddTodo}>
			AddTodo
		</button>
	);
};
