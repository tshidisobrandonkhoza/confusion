import { createSlice } from '@reduxjs/toolkit';

import { PROMOTIONS } from '../../../shared/promotions';

const initialState = {
    promotion: PROMOTIONS
}
export const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducers: {
        updatePromotions: (state, action) => {
            state.promotions.name = action.payload
        }
    }
});


export default promotionsSlice.reducer;
 export const { updatePromotions} = promotionsSlice.actions;