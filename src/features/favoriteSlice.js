import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    // actions
    addFavorite: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
    },

    removeFavorite: (state, action) => {
      state.favorite = [
        ...state.favorite.filter(
          (item) => action.payload.original_title !== item.original_title
        ),
      ];
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const selectFavorite = (state) => state.favorite.favorite;

export default favoriteSlice.reducer;
