import {configureStore} from '@reduxjs/toolkit';
import {gameHistorySlice} from './reducers/gameHistoryReducer';
import {gameStateSlice} from './reducers/gameStateReducer';

export const store = configureStore({
  reducer: {
    gameHistory: gameHistorySlice.reducer,
    gameState: gameStateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
