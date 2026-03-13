import { useDispatch, useSelector } from "react-redux";
import { getProvider, getSigner } from "../lib/ethers";
import { connectWallet } from "../store/slices/walletSlice";
import type { RootState } from "../store";

const Login = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state: RootState) => state.wallet);

  const handleConnect = async () => {
    try {
      const { connectedAccount } = await getSigner();
      const provider = getProvider();
      const network = await provider.getNetwork();
      dispatch(
        connectWallet({
          address: connectedAccount,
          isConnected: true,
          chainId: network.chainId,
        }),
      );
    } catch (error) {
      throw new Error("Error connecting wallet: " + error);
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
            : "Connect your Metamask Wallet"}
        </h2>
        <button
          className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
          onClick={handleConnect}
        >
          Connect
        </button>
      </div>
    </div>
  );
};
export default Login;
