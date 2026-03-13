import { ethers } from "ethers";
import { ABI, CONTRACT_BYTECODE } from "../constants/contract";

// Function to get the provider from MetaMask
export const getProvider = () => {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  return new ethers.providers.Web3Provider(window.ethereum);
};

// Function to get the signer from the provider
export const getSigner = async () => {
  const provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const connectedAddress = await signer.getAddress();

  return { connectedAddress, signer };
};

// Function to get a contract factory for deploying new contracts
export const getContractFactory = async () => {
  const { signer } = await getSigner();

  const factory = new ethers.ContractFactory(ABI, CONTRACT_BYTECODE, signer);
  return factory;
};
