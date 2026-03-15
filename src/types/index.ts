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
  gameId: string | null;
  opponent: string | null;
  stake: string;
  move: string | null;
  salt: string | null;
  commitmentHash: string | null;
  status: "idle" | "creating" | "waiting" | "joined" | "reveal" | "finished";
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

// Modal component props
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
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
