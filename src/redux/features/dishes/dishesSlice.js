
import { createSlice } from '@reduxjs/toolkit';

import { DISHES } from '../../../shared/dishes';

const initialState = {
    dish: DISHES
}
export const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        updateDish: (state, action) => {
            state.dishes.name = action.payload
        }
    }
});


export default dishesSlice.reducer;
export const { updateDish } = dishesSlice.actions;
