import { ethers } from "ethers";

// Utility function to generate commitment hash for a move
export const generateCommitmentHash = (move: string, salt: string) => {
  return ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(["uint8", "uint256"], [move, salt]),
  );
};

// Utility function to generate a random salt
export const generateRandomSalt = () => {
  return ethers.utils.hexlify(ethers.utils.randomBytes(32));
};
