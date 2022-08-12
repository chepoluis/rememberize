import { createSlice } from '@reduxjs/toolkit';

export const pointsSlice = createSlice({
    name: 'points',
    initialState: {
        points: 0
    },
    reducers: {
        incrementPoints: (state) => {
            state.points += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { incrementPoints } = pointsSlice.actions;