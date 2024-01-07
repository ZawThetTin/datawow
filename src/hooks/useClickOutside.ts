import { MutableRefObject, useEffect, useRef } from 'react';

export const useClickOutside = (
	elRef: MutableRefObject<HTMLDivElement | null>,
	callback: () => void
) => {
	const callbackRef = useRef<(e: MouseEvent) => void>();
	callbackRef.current = callback;

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!elRef?.current?.contains(e.target as Node) && callbackRef.current)
				callbackRef.current(e);
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [elRef, callbackRef]);
};
