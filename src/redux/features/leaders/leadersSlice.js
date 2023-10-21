import { createSlice } from '@reduxjs/toolkit';

import { LEADERS } from '../../../shared/leaders';

const initialState = {
    leader: LEADERS
}
export const leadersSlice = createSlice({
    name: 'leaders',
    initialState,
    reducers: {
        updateLeader: (state, action) => {
            state.leaders.name = action.payload
        }
    }
});


export default leadersSlice.reducer;
export const { updateLeader} = leadersSlice.actions;