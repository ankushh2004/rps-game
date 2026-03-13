import { createSlice } from "@reduxjs/toolkit";
import type { walletState } from "../../types";

const initialState: walletState = {
  address: "",
  isConnected: false,
  chainId: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    connectWallet: (state, action) => {
      state.address = action.payload.address;
      state.chainId = action.payload.chainId;
      state.isConnected = true;
    },
    disconnectWallet: (state) => {
      state.address = "";
      state.chainId = null;
      state.isConnected = false;
    },
  },
});
export const { connectWallet, disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;
