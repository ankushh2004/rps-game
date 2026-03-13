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

// game slice types

export interface GameState {
  gameId: string;
  player1: string;
  player2: string;
  stake: number;
  movePlayer1: string;
  movePlayer2: string;
  gameStatus: "idle" | "waiting" | "active" | "completed";
}

// Input component props
export interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  error?: string;
}

// Select component props
export interface SelectProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ label: string; value: string | number }>;
  error?: string;
}

// Form data for CreateGame component

export interface CreateGameForm {
  player2: string;
  stake: string;
  move: string;
}

export interface JoinGameForm {
  gameId: string;
  stake: string;
  gesture: string;
}
