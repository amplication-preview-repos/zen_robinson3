import { BankAccountWhereUniqueInput } from "../bankAccount/BankAccountWhereUniqueInput";

export type DashboardCreateInput = {
  bankAccount?: BankAccountWhereUniqueInput | null;
  totalExpense?: number | null;
  totalIncome?: number | null;
};
