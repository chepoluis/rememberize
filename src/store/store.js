import { configureStore } from '@reduxjs/toolkit'
import { wordsSlice } from './slices/words/wordsSlice';

export const store = configureStore({
  reducer: {
    words: wordsSlice.reducer
  },
})