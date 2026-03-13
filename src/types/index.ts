// declaring global interface for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

// wallet slice types
export interface walletState {
  address: string;
  isConnected: boolean;
  chainId: number | null;
}
