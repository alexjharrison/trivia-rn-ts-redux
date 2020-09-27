import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface GameHistorySliceState {
  scores: number[];
}

export const gameHistorySlice = createSlice({
  name: 'gameHistory',
  initialState: {scores: []} as GameHistorySliceState,
  reducers: {
    addScore: (
      state: GameHistorySliceState,
      action: PayloadAction<number>,
    ) => ({
      scores: [...state.scores, action.payload],
    }),
  },
});
