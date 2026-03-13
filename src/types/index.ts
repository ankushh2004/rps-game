// declaring global interface for window.ethereum
declare global{
  interface Window{
    ethereum?: any;
  }
}

// wallet slice types
export interface WalletState {
  address: string;
  isAuthenticated: boolean;
}
