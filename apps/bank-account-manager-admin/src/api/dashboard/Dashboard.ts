import { BankAccount } from "../bankAccount/BankAccount";

export type Dashboard = {
  bankAccount?: BankAccount | null;
  createdAt: Date;
  id: string;
  totalExpense: number | null;
  totalIncome: number | null;
  updatedAt: Date;
};
