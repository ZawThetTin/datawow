import { FC, HtmlHTMLAttributes } from 'react';

import './Input.scss';
import { cn } from '@/utils';

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
	value: string;
	autofocus?: boolean;
	showSubmitBtn?: boolean;
}

export const Input: FC<Props> = ({
	onChange,
	value = '',
	autofocus = false,
	onBlur,
	showSubmitBtn = true,
}) => {
	return (
		<div className='input-wrapper'>
			<input
				type='text'
				className='input'
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				placeholder='Add your todo...'
				autoFocus={autofocus}
			/>
			<button
				className={cn('submit-btn', !showSubmitBtn ? 'hidden' : '')}
				disabled={!value}>
				Save
			</button>
		</div>
	);
};
