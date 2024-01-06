import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Todo } from '../../types/todos.types';

interface InitialState {
	todos: Todo[];
}

export const TODOS_SLICE = 'todos';
const initialState: InitialState = {
	todos: [],
};

export const todosSlice = createSlice({
	name: TODOS_SLICE,
	initialState,
	reducers: {
		setClinics: (state, action) => {
			state.todos = action.payload;
		},
		addClinic: (state, action) => {
			state.todos = [...state.todos, action.payload];
		},
	},
});

export const selectClinics = (
	state: RootState
): ReturnType<typeof todosReducer> => state[TODOS_SLICE];

// Action creators are generated for each case reducer function
export const { setClinics, addClinic } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
