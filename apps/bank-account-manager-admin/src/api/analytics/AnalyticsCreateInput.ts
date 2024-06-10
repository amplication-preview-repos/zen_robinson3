import { BankAccountWhereUniqueInput } from "../bankAccount/BankAccountWhereUniqueInput";

export type AnalyticsCreateInput = {
  bankAccount?: BankAccountWhereUniqueInput | null;
  predictedExpense?: number | null;
  predictedIncome?: number | null;
};
