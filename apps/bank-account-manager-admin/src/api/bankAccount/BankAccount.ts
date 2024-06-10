import { Analytics } from "../analytics/Analytics";
import { Dashboard } from "../dashboard/Dashboard";
import { Transaction } from "../transaction/Transaction";

export type BankAccount = {
  accountNumber: string | null;
  analyticsItems?: Array<Analytics>;
  balance: number | null;
  bankName: string | null;
  createdAt: Date;
  currency: string | null;
  dashboards?: Array<Dashboard>;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
