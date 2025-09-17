import { useWalletStore } from "../../stores/WalletStore";

interface Props {}

export const Wallet = ({}: Props) => {
  const { balance, addFunds, spendFunds } = useWalletStore();
  return (
    <div className="flex items-center gap-2 bg-white text-purple-700 px-3 py-1 rounded-lg">
      <span>💰 {balance}</span>
      <button
        onClick={() => addFunds(100)}
        className="bg-green-500 hover:bg-green-400 px-2 py-1 rounded text-white text-sm"
      >
        +100
      </button>
      <button
        onClick={() => spendFunds(50)}
        className="bg-red-500 hover:bg-red-400 px-2 py-1 rounded text-white text-sm"
      >
        -50
      </button>
    </div>
  );
};
