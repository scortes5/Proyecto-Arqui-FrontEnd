import { useWalletStore } from "../../stores/WalletStore";
import { Plus, Minus } from "lucide-react"; // opcional, si quieres íconos más clean

interface Props {}

export const Wallet = ({}: Props) => {
  const { balance, addFunds, spendFunds } = useWalletStore();

  return (
    <div className="flex items-center gap-2 bg-purple-800/40 border border-white/20 px-3 py-1 rounded-full text-white text-sm">
      {/* Balance */}
      <span className="flex items-center gap-1 font-medium">💰 {balance}</span>

      {/* Botones */}
      <button
        onClick={() => addFunds(100)}
        className="p-1 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"
        title="Agregar fondos"
      >
        <Plus size={14} />
      </button>
      <button
        onClick={() => spendFunds(50)}
        className="p-1 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
        title="Gastar fondos"
      >
        <Minus size={14} />
      </button>
    </div>
  );
};
