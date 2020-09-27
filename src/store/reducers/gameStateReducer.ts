import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface GameStateSliceState {
  correct: number;
  incorrect: number;
  questions: {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
  }[];
}

const initialState: GameStateSliceState = {
  correct: 0,
  incorrect: 0,
  questions: [],
};

export const gameStateSlice = createSlice({
  name: 'gameHistory',
  initialState: initialState,
  reducers: {
    checkAnswer: (
      state: GameStateSliceState,
      action: PayloadAction<number>,
    ) => {
      console.log(state, action);
      return {...state};
    },
  },
});
