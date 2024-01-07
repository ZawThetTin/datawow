import { FC, InputHTMLAttributes } from 'react';
import './Checkbox.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: FC<Props> = props => {
	return <input {...props} type='checkbox' className='checkbox' />;
};
