import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        words: [
            {
                id: 1,
                definition: 'is simply dummy text of the printing and typesetting industry',
                answer: false
            },
            {
                id: 2,
                definition: 'is simply dummy text of the printing and typesetting industry',
                answer: false
            },
            {
                id: 3,
                definition: 'is simply dummy text of the printing and typesetting industry',
                answer: true
            },
            {
                id: 4,
                definition: 'is simply dummy text of the printing and typesetting industry',
                answer: false
            },
            {
                id: 5,
                definition: 'is simply dummy text of the printing and typesetting industry',
                answer: false
            }
        ]
    },
    reducers: {
        increment: (state, /* action */ ) => {
            // TODO: deleted :D
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = wordsSlice.actions;