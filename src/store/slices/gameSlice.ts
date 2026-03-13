import { createSlice } from "@reduxjs/toolkit";
import type { GameState } from "../../types";

const initialState: GameState = {
  gameId: "",
  player1: "",
  player2: "",
  stake: 0,
  movePlayer1: "",
  movePlayer2: "",
  gameStatus: "idle",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameId: (state, action) => {
      state.gameId = action.payload;
    },
    setPlayer1: (state, action) => {
      state.player1 = action.payload;
    },
    setPlayer2: (state, action) => {
      state.player2 = action.payload;
    },
    setStake: (state, action) => {
      state.stake = action.payload;
    },
    setMovePlayer1: (state, action) => {
      state.movePlayer1 = action.payload;
    },
    setMovePlayer2: (state, action) => {
      state.movePlayer2 = action.payload;
    },
    setGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
  },
});

export const {
  setGameId,
  setPlayer1,
  setPlayer2,
  setStake,
  setMovePlayer1,
  setMovePlayer2,
  setGameStatus,
} = gameSlice.actions;
export default gameSlice.reducer;
