import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		ids: [],
	},
	reducers: {
		addFavorite: (state, action) => {
			const { id } = action.payload;
			state.ids.push(id);
		},
		removeFavorite: (state, action) => {
			const { id } = action.payload;
			const index = state.ids.indexOf(id);
			state.ids.splice(index, 1);
		},
	},
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;
