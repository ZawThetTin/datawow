import { Dropdown } from '@/components/Dropdown';
import { FC, PropsWithChildren, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_ALL } from '@/data/CONSTANTS';
import { selectTodos, setActiveFilter } from '@/redux/modules';
import './FilterTodo.scss';

interface Props extends PropsWithChildren {
	value: string;
}

export const FilterTodo = () => {
	const dispatch = useDispatch();
	const { activeFilter } = useSelector(selectTodos);
	const [showFilters, setShowFilters] = useState(false);

	const handleSelectFilter = (value: string) => {
		dispatch(setActiveFilter(value));
		setShowFilters(false);
	};

	const FilterOption: FC<Props> = ({ children, value }) => (
		<button
			className={cn('filter-option', value === activeFilter ? 'active' : '')}
			onClick={() => handleSelectFilter(value)}>
			{children}
		</button>
	);

	return (
		<Dropdown
			show={showFilters}
			setShow={setShowFilters}
			className='todo-filter-wrapper'
			render={
				<button
					className='todo-filter-btn'
					onClick={() => setShowFilters(true)}>
					{activeFilter}
					<ChevronDownIcon width={14} />
				</button>
			}>
			<FilterOption value={FILTER_ALL}>All</FilterOption>
			<FilterOption value='Done'>Done</FilterOption>
			<FilterOption value='Undone'>Undone</FilterOption>
		</Dropdown>
	);
};
