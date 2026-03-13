import { MOVES } from "../constants";
import type { CreateGameForm, JoinGameForm } from "../types";

// ---- Core Types ----

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// ---- Individual Field Validators ----
const ETHEREUM_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

export function validateEthereumAddress(address: string): string | null {
  if (!address.trim()) return "Wallet address is required";
  if (!ETHEREUM_ADDRESS_REGEX.test(address)) return "Invalid Ethereum address";
  return null;
}

export function validateStake(stake: string): string | null {
  if (!stake.trim()) return "Stake amount is required.";
  const amount = parseFloat(stake);
  if (isNaN(amount)) return "Stake must be a valid number.";
  if (amount <= 0) return "Stake must be greater than 0.";
  return null;
}

export function validateMove(move: string): string | null {
  if (!move.trim()) return "Please select a move.";
  const validMoves = MOVES.map((m) => m.value);
  if (!validMoves.includes(move)) return "Invalid move selected.";
  return null;
}

export function validateGameId(gameId: string): string | null {
  if (!gameId.trim()) return "Game ID is required.";
  if (!ETHEREUM_ADDRESS_REGEX.test(gameId))
    return "Invalid Game ID (must be a contract address).";
  return null;
}

export function validateCreateGameForm(
  form: CreateGameForm,
  currentWallet?: string,
): ValidationResult {
  const errors: Record<string, string> = {};

  const player2Error = validateEthereumAddress(form.player2);
  if (player2Error) errors.player2 = player2Error;

  // Ensure player2 is not the same as the connected wallet
  if (
    !player2Error &&
    currentWallet &&
    form.player2.toLowerCase() === currentWallet.toLowerCase()
  ) {
    errors.player2 = "You cannot play against yourself.";
  }

  const stakeError = validateStake(form.stake);
  if (stakeError) errors.stake = stakeError;

  const moveError = validateMove(form.move);
  if (moveError) errors.move = moveError;

  return { isValid: Object.keys(errors).length === 0, errors };
}

export function validateJoinGameForm(form: JoinGameForm): ValidationResult {
  const errors: Record<string, string> = {};

  const gameIdError = validateGameId(form.gameId);
  if (gameIdError) errors.gameId = gameIdError;

  const stakeError = validateStake(form.stake);
  if (stakeError) errors.stake = stakeError;

  const gestureError = validateMove(form.gesture);
  if (gestureError) errors.gesture = gestureError;

  return { isValid: Object.keys(errors).length === 0, errors };
}
