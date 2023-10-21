
import { createSlice } from '@reduxjs/toolkit';

import { COMMENTS } from '../../../shared/comments';

const initialState = {
    comment: COMMENTS
}
export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        updateComment: (state, action) => {
            state.comments.comment = action.payload
        }
    }
});

export default commentsSlice.reducer;
export const { updateComment } = commentsSlice.actions;