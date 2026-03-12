import { createSlice } from "@reduxjs/toolkit";
import type { WalletState } from "../../types";



const initialState: WalletState = {
  address: "",
  isAuthenticated: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});
export const { setAddress, setIsAuthenticated } = walletSlice.actions;

export default walletSlice.reducer;
