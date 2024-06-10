import { BankAccountWhereUniqueInput } from "../bankAccount/BankAccountWhereUniqueInput";

export type DashboardUpdateInput = {
  bankAccount?: BankAccountWhereUniqueInput | null;
  totalExpense?: number | null;
  totalIncome?: number | null;
};
