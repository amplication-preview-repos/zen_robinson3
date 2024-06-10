import { BankAccount } from "../bankAccount/BankAccount";

export type Analytics = {
  bankAccount?: BankAccount | null;
  createdAt: Date;
  id: string;
  predictedExpense: number | null;
  predictedIncome: number | null;
  updatedAt: Date;
};
