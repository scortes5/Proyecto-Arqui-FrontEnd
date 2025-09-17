import { create } from "zustand";
import { persist } from "zustand/middleware";

type WalletStore = {
  balance: number;
  addFunds: (amount: number) => void;
  spendFunds: (amount: number) => void;
};

export const useWalletStore = create<WalletStore>()(
  persist(
    (set) => ({
      balance: 1000,
      addFunds: (amount) =>
        set((state) => ({
          balance: state.balance + amount,
        })),
      spendFunds: (amount) =>
        set((state) => ({
          balance: Math.max(0, state.balance - amount),
        })),
    }),
    {
      name: "wallet-storage",
    }
  )
);
