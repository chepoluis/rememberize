import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        words: [
            [
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
                }
            ],
            [
                {
                    id: 1,
                    definition: 'is simply dummy text of the printing and typesetting industry',
                    answer: false
                },
                {
                    id: 2,
                    definition: 'asdf',
                    answer: false
                },
                {
                    id: 3,
                    definition: 'is simply dummy text of the printing and typesetting industry',
                    answer: true
                }
            ],
            [
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
                }
            ],
            [
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
                }
            ],
            [
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
                }
            ]
        ],
        currentIndex: 0
    },
    reducers: {
        incrementIndex: (state ) => {
            if (state.currentIndex < state.words.length - 1) {
                state.currentIndex += 1;
            }
        },
    }
});


// Action creators are generated for each case reducer function
export const { incrementIndex } = wordsSlice.actions;