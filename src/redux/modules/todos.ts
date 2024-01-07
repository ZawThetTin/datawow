import { FILTER_ALL } from '@/data/CONSTANTS';
import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	activeFilter: string;
}

export const TODOS_SLICE = 'todos';
const initialState: InitialState = {
	activeFilter: FILTER_ALL,
};

export const todosSlice = createSlice({
	name: TODOS_SLICE,
	initialState,
	reducers: {
		setActiveFilter: (state, action) => {
			state.activeFilter = action.payload;
		},
	},
});

export const selectTodos = (
	state: RootState
): ReturnType<typeof todosReducer> => state[TODOS_SLICE];

// Action creators are generated for each case reducer function
export const { setActiveFilter } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
