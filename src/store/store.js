import { configureStore } from '@reduxjs/toolkit'
import { pointsSlice } from './slices/points/pointsSile';
import { wordsSlice } from './slices/words/wordsSlice';

export const store = configureStore({
  reducer: {
    words: wordsSlice.reducer,
    points: pointsSlice.reducer
  },
})