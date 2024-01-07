import { FC, PropsWithChildren, ReactNode, useRef } from 'react';
import './Dropdown.scss';
import { useClickOutside } from '@/hooks';
import { cn } from '@/utils';

interface Props extends PropsWithChildren {
	render: ReactNode;
	show: boolean;
	setShow: (value: boolean) => void;
	className?: string;
}

export const Dropdown: FC<Props> = ({
	children,
	show = false,
	setShow = () => {},
	className = '',
	render,
	...rest
}) => {
	const contentRef = useRef<HTMLDivElement>(null);

	const handleHideContent = () => {
		setShow(false);
	};

	useClickOutside(contentRef, handleHideContent);
	if (!render) return null;

	return (
		<div className={cn('dropdown', show ? 'open' : '', className)} {...rest}>
			{render}
			<div ref={contentRef} className='dropdown-content'>
				{children}
			</div>
		</div>
	);
};
