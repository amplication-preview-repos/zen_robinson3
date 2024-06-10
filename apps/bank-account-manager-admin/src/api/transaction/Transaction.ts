import { BankAccount } from "../bankAccount/BankAccount";

export type Transaction = {
  amount: number | null;
  bankAccount?: BankAccount | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
