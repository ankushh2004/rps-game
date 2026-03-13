import { ethers } from "ethers";

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
  const connectedAccount = await signer.getAddress();

  return { connectedAccount, signer };
};
