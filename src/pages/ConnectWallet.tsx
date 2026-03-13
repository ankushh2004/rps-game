import { useDispatch, useSelector } from "react-redux";
import { getProvider, getSigner } from "../lib/ethers";
import { connectWallet } from "../store/slices/walletSlice";
import type { RootState } from "../store";
import { SEPOLIA_NETWORK_CONFIG } from "../constants";
import { useNavigate } from "react-router";
import { showToast } from "../components/ui/Toast";
import { useState } from "react";

const ConnectWallet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);
  const wallet = useSelector((state: RootState) => state.wallet);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      const { connectedAddress } = await getSigner();
      const provider = getProvider();
      const network = await provider.getNetwork();

      if (network.chainId !== SEPOLIA_NETWORK_CONFIG.chainId) {
        setIsWrongNetwork(true);
        setIsConnecting(false);
        showToast({
          type: "error",
          title: "Wrong Network Detected,Please Switch to Sepolia",
        });
        return;
      }

      dispatch(
        connectWallet({
          address: connectedAddress,
          isConnected: true,
          chainId: network.chainId,
        }),
      );
      showToast({
        type: "success",
        title: "Wallet Connected Successfully!",
      });
      setIsConnecting(false);
      setTimeout(() => {
        navigate("/game-lobby");
      }, 1500);
    } catch (error) {
      console.error("Connection failed:", error);
      showToast({
        type: "error",
        title: "Connection Failed",
        description: "Could not connect to wallet!",
      });
      setIsConnecting(false);
    }
  };

  const handleSwitchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEPOLIA_NETWORK_CONFIG.chainIdHex }],
      });
      setIsWrongNetwork(false);
      showToast({
        type: "success",
        title: "Network Switched!",
        description: "Now click Connect to continue!",
      });
    } catch (error) {
      console.error("Network switching failed:", error);
      showToast({
        type: "error",
        title: "Network Switch Failed!",
      });
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="space-y-6 p-8 text-center">
        <h1 className="text-4xl font-bold text-white">
          Rock Paper Scissors DApp
        </h1>
        <h2 className="text-xl text-gray-400">
          {wallet.address
            ? `Connected Address: ${wallet.address}`
            : isWrongNetwork
              ? "Wrong network detected. Switch to Sepolia to continue."
              : "Connect your Metamask Wallet"}
        </h2>

        {isWrongNetwork ? (
          <button
            className="rounded-lg bg-yellow-500 px-8 py-3 font-medium text-black hover:bg-yellow-400"
            onClick={handleSwitchNetwork}
          >
            Switch to Sepolia Network
          </button>
        ) : (
          <button
            className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
            onClick={handleConnect}
            disabled={isConnecting}
          >
            {isConnecting ? "Connecting..." : "Connect"}
          </button>
        )}
      </div>
    </div>
  );
};
export default ConnectWallet;
